import React, { useEffect, useState , Fragment } from 'react'
import '../styles/Home.css'
import { nanoid } from 'nanoid'
import exchangeData from "./exchange.json"
import tickerData from "./ticker.json"
import segmentData from "./segment.json"
import typeData from "./type.json"
import sideData from "./side.json"
import popularStrategiesName from "./popularStrategies"
import detailPopularStrategies from "./detailPopularStratergies"
import detailStrategiesSkeletonFunction from "./detailCustomStrategies.js"
import customStrategiesName from "./customStrategies"
import { ReadOnlyRow } from './ReadOnlyRow'
import makePlotFunction from './plots'
import { Plot } from './Plot'
import { EditableRow } from './EditableRow'
import SavedStrategyImplementation from './StrategyImplementationData';
import Nav from './Nav'

export const Home = () => {
    SavedStrategyImplementation()
    const [plotVisible,setPlotVisible] = useState(false); 
    const [_coords,setCoords] = useState({});
    const [selectedRadioBtn, setSelectedRadioBtn] = useState('popular');
    const [customStrategies,setcustomStrategies] = useState( [
        {
            "id" : "1",
            "name" : "custom"
        }
    ]);

    const [popularStrategies,setpopularStrategies] = useState([
        {
        "id" : "1",
        "name" : " "
        }
    ])
  
    const isRadioSelected = (value) => {
        return selectedRadioBtn === value;
    }
    var detailCustomStrategies;
    
    
    const handleRadioClick = async (event) => {
        if(customStrategies.length==1){
            var temp1 = customStrategies;
            var temp = await customStrategiesName();
            temp.push(temp1[0]);
            setcustomStrategies(temp);
        }

        if(popularStrategies.length==1){
            var temp = await popularStrategiesName();
            setpopularStrategies(temp);
        }
        setDetails([]);
        showTable(true);
        setSelectedRadioBtn(event.target.value);
    }
    //const dataVal = {type:'',}
    useEffect(() => {
        let exchangeVal = document.querySelector('#exchange').value;
        let tickerVal = document.querySelector('#ticker').value;
        let segmentVal = document.querySelector('#segment').value;
        let typeVal = document.querySelector('#type').value;
        let sideVal = document.querySelector('#side').value;
        let strategyVal = document.querySelector('#strategy').value;
        const newDetail = {
            exchange: exchangeVal,
            ticker: tickerVal,
            strategy: strategyVal,
            segment: segmentVal,
            expiry: '',
            side: sideVal,
            quantity: '',
            strike: '',
            type: segmentVal != 'custom' ? 'Db segment' : typeVal
            //dataVal update
        };
        setAddDetails(newDetail);
        if (segmentVal === 'Futuree') setStrikeAndType(true);

    }, [])

    const [details, setDetails] = useState([]);
    const [addDetails, setAddDetails] = useState({
        exchange: '',
        ticker: '',
        strategy: '',
        segment: '',
        expiry: '',
        side: '',
        quantity: '',
        strike: '',
        type: ''
    });
    const [custom, setCustom] = useState(true);
    const [table, showTable] = useState(true);
    const [strikeAndType, setStrikeAndType] = useState(false);
    const [isPriceVisible,setPriceVisibility] = useState(false);

    const handleDetailsNonCustom = (event) => {
        setDetails([]);
        showTable(true);
        let strategyID = document.querySelector('#strategy');
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = { ...addDetails };
        newFormData[fieldName] = fieldValue;

        setAddDetails(newFormData);
        if (strategyID.value === 'custom')
            setCustom(false);
        else
            setCustom(true);
    };
    const handleDetailsStratergy = (event) => {

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        if (fieldValue !== 'custom') {
            showTable(true);
            setDetails([]);
        }
        //fetch from database update dataVal {}

        event.preventDefault();
        const newFormData = { ...addDetails };
        newFormData[fieldName] = fieldValue;

        setAddDetails(newFormData);
        if (fieldValue === 'custom')
            setCustom(false);
        else
            setCustom(true);

    };
    const handleDetailsSegment = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = { ...addDetails };
        newFormData[fieldName] = fieldValue;

        setAddDetails(newFormData);
        if (fieldValue === 'Futuree')
            setStrikeAndType(true);
        else
            setStrikeAndType(false);

    };
    const handleDetailsCustom = (event) => {
        event.preventDefault();
        let quantityID = document.querySelector('#quantity');
        if (quantityID.value > 9999999) quantityID.value = 9999999;
        let strikeID = document.querySelector('#strike');
        if (strikeID.value > 10000) strikeID.value = 10000;
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = { ...addDetails };
        newFormData[fieldName] = fieldValue;

        setAddDetails(newFormData);

    };
    const fetchData = async (type, jsonFile) => {
        var detailJson;
        let pId = -1;
        let strategyID = document.querySelector('#' + type);
        for (let pS in jsonFile) {
            if (jsonFile[pS].name === strategyID.value) {
                pId = jsonFile[pS].id;
                break;
            }
        }
        // console.log(pId);

        console.log(".......................");
        detailJson = await detailStrategiesSkeletonFunction(pId);
        console.log(detailJson);
        
        let tempObj;
        for (let i in detailJson) {
            if (detailJson[i].id === pId) {
                tempObj = { ...detailJson[i] }
                break;
            }
        }
        if(!tempObj){
            tempObj = {...detailJson};
        }
        // console.log(tempObj);
        // let noOfEnteries = tempObj.instruments.length;
        // console.log(noOfEnteries);
        let exchangeVal = addDetails.exchange;
        let tickerVal = addDetails.ticker;
        let strategyVal = addDetails.strategy;
        let expiryVal = addDetails.expiry;
        let objCommon = {
            "exchange": exchangeVal,
            "ticker": tickerVal,
            "strategy": strategyVal,
            "expiry": expiryVal
        }
        // console.log(objCommon)
        // let objMerge = {...objCommon,...tempObj.instruments[0]}
        let detailsArr = [];
        console.log("detailjson and tempObj");
        console.log(detailJson);
        console.log(tempObj);
        for (let i in tempObj.instruments) {
            console.log("krishna")
            let objMerge = { ...objCommon, ...tempObj.instruments[i] }
            detailsArr.push(objMerge);
        }
        // console.log(detailsArr);
        setDetails(detailsArr);

    }
    const [editDetailId, setEditDetailId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        exchange: '',
        ticker: '',
        strategy: '',
        segment: '',
        expiry: '',
        side: '',
        quantity: '',
        strike: '',
        type: ''
      });
    const handleEditClick = (event, detail) => {
        event.preventDefault();
        setEditDetailId(detail.id);
        console.log(detail.id);
    
        const formValues = {
            exchange: detail.exchange,
            ticker: detail.ticker,
            strategy: detail.strategy,
            segment: detail.segment,
            expiry: detail.expiry,
            side: detail.side,
            quantity: detail.quantity,
            strike: detail.strike,
            type: detail.type
        };
    
        setEditFormData(formValues);
      };

      const handleCancelClick = () => {
        setEditDetailId(null);
      };

      const handleDeleteClick = (editDetailId) => {
        const newDetails = [...details];
    
        const index = details.findIndex((detail) => detail.id === editDetailId);
    
        newDetails.splice(index, 1);
    
        setDetails(newDetails);
      };

      const handleEditFormChange = (event) => {
        console.log('handleEditformchange')
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
    
        setEditFormData(newFormData);
      };

      const handleEditFormSubmit = (event) => {
          console.log('handleEditform')
        event.preventDefault();
    
        const editedDetails = {
            exchange: editFormData.exchange,
            ticker: editFormData.ticker,
            id: editDetailId,
            strategy: editFormData.strategy,
            segment: editFormData.segment,
            expiry: editFormData.expiry,
            side: editFormData.side,
            quantity: editFormData.quantity,
            strike: editFormData.strike,
            type: editFormData.type
        };
    
        const newDetails = [...details];
    
        const index = details.findIndex((detail) => detail.id === editDetailId);
    
        newDetails[index] = editedDetails;
    
        setDetails(newDetails);
        setEditDetailId(null);
      };

    const handleDetailsAdd = async (event) => {
        console.log("adddd");
        event.preventDefault();
        showTable(false);
        const table = document.querySelector('.dtable');
        table.style.display = 'block';
        if (selectedRadioBtn === 'popular') {
            console.log("22.......................");
            fetchData("strategy", popularStrategies);
        }
        else if (selectedRadioBtn === 'custom' && addDetails.strategy !== 'custom') {
            fetchData("strategy", customStrategies);
           
        }
        else {
            console.log("111.......................");
            const newDetail = {
                id: nanoid(),
                exchange: addDetails.exchange,
                ticker: addDetails.ticker,
                strategy: addDetails.strategy,
                segment: addDetails.strategy != 'custom' ? 'Db segment' : addDetails.segment,
                expiry: addDetails.expiry,
                side: addDetails.strategy != 'custom' ? 'Db side' : addDetails.side,
                quantity: addDetails.strategy != 'custom' ? 'Db side' : addDetails.quantity,
                strike: addDetails.segment === 'Future' ? '' : addDetails.strike,
                type: addDetails.segment === 'Future' ? '' : addDetails.type
            };
            const newDetails = [...details, newDetail];
            setDetails(newDetails);
        }
    }

    const sendDataToBackend =  async (strategy) =>{
    console.log(strategy)
    const response = await fetch("http://localhost:8000/api/save/SaveStrategy", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(strategy)
      });
      const json = await response.json()
      console.log(json);
      if (!json.err){
        console.log("register Successfull")
      }
      else{
        console.log(json);
        alert("Invalid !!");
      }
    }
  

    const save = async () => {
        console.log("save")
        if (selectedRadioBtn === 'custom' && addDetails.strategy === 'custom') {
            toggleModal();
        }   
            let instruments = [];
            for (let i in details) {
                let instObj = {
                    "segment": details[i].segment,
                    "Side": details[i].side,
                    "Quantity": details[i].quantity,
                    "StrikePrice": details[i].strike,
                    "Type": details[i].type,
                    "SkeletonId" : details[i].id
                }
                instruments.push(instObj);
            }
            let newCustomStrategy = {
                "Name": "",
                "DescriptionSkeleton": "",
                "ExpiryDate": details[0].expiry,
                "StockName": details[0].exchange,
                "Ticker": details[0].ticker,
                "listInstruments": instruments,
                "InvestmentStrategySkeletonId" : details[0].InvestmentStrategySkeletonId
            }
            
            await sendDataToBackend(newCustomStrategy);
        
        
    }

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };
    const [modal, setModal] = useState(false);
    // const [nameDesc, setNameDesc]=useState({});
    const toggleModal = () => {
        setModal(!modal);
    };

    const makeplot = async () => {
        let instruments = [];
        for (let i in details) {
            let instObj = {
                "segment": details[i].segment,
                "Side": details[i].side,
                "Quantity": details[i].quantity,
                "StrikePrice": details[i].strike,
                "Type": details[i].type,
                "SkeletonId" : details[i].id
            }
            instruments.push(instObj);
        }
        console.log(details)
        let newCustomStrategy = {
            "Name": "",
            "DescriptionSkeleton": "",
            "ExpiryDate": details[0].expiry,
            "StockName": details[0].exchange,
            "Ticker": details[0].ticker,
            "listInstruments": instruments,
            "InvestmentStrategySkeletonId" : details[0].InvestmentStrategySkeletonId
        }
        console.log(newCustomStrategy);
      var coordinates = await makePlotFunction(newCustomStrategy);
      setCoords(coordinates);
      setPlotVisible(true);
    }

    const saveModal = ()=>{
        let stName =document.querySelector('.stName').value;
        let stDesc =document.querySelector('.stDesc').value;
        // let nD ={
        //     "name":stName,
        //     "description":stDesc
        // }
        // setNameDesc(nD);
        toggleModal();
        // let l = detailCustomStrategies.length;
        // detailCustomStrategies[l-1].name = stName;
        // detailCustomStrategies[l-1].description = stDesc;
        // console.log(detailCustomStrategies);

    }

    

    return (
        <>
            <Nav/>
         

            <div className='home'>
                <div className='main'>
                    <p className='heading'>Select Products</p>
                    <form onSubmit={handleDetailsAdd} >
                        <div className="main-select-products">
                            <div className='select-products'>
                                <p className='sub-heading-1st'>Exchange</p>
                                <select
                                    name="exchange"
                                    id="exchange"
                                    className='products'
                                    onChange={handleDetailsNonCustom}
                                >
                                    {
                                        exchangeData.map((data) => {
                                            return <option value={data.name}>{data.name}</option>
                                        })
                                    }</select>
                            </div>
                            <div className='select-products'>
                                <p className='sub-heading-1st'>Ticker</p>

                                <select
                                    name="ticker"
                                    id="ticker"
                                    className='products'
                                    onChange={handleDetailsNonCustom}
                                >

                                    {
                                        tickerData.map((data) => {
                                            return <option value={data.name}>{data.name}</option>
                                        })
                                    }</select>
                            </div>
                            <div className='select-products'>
                                <p className='sub-heading-1st'>Expiry Date</p>
                                <input
                                    type="date"
                                    min={disablePastDate()}
                                    required
                                    name="expiry"
                                    className='products'
                                    onChange={handleDetailsNonCustom}
                                />
                            </div>
                            <div className='select-products'>
                                <p className='sub-heading-1st'>Type of Strategy</p>
                                <div className='radio-btn'>
                                    <div>

                                        <input type="radio" id="popular-radio"
                                            className='option-strategy'
                                            name="select-stratergy"
                                            value="popular"
                                            checked={isRadioSelected('popular')}
                                            onChange={handleRadioClick} />
                                        <label for="popular-radio" selected>Popular</label>
                                    </div>
                                    <div>

                                        <input type="radio" id="custom-radio"
                                            className='option-strategy'
                                            name="select-stratergy"
                                            value="custom"
                                            checked={isRadioSelected('custom')}
                                            onChange={handleRadioClick} />
                                        <label for="custom-radio">Custom</label>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className='main-select-products'>
                            <div className='select-products'>
                                <p className='sub-heading-1st'>Strategy</p>

                                <select
                                    name="strategy"
                                    id="strategy"
                                    className='products'
                                    onChange={handleDetailsStratergy}
                                >
                                    {selectedRadioBtn == 'popular' ?
                                        popularStrategies.map((data) => {
                                            return <option value={data.name}>{data.name}</option>
                                        }) :
                                        customStrategies.map((data) => {
                                            return <option value={data.name}>{data.name}</option>
                                        })

                                    }</select>
                            </div>
                            <div className='select-products'></div>
                            <div className='select-products'></div>
                            <div className='select-products'></div>
                        </div>

                        <div className={`main-select-products ${custom === true ? 'customDiv' : ''}`} >
                            <div className='select-products'>
                                <p className='sub-heading-1st' >Segment</p>

                                <select
                                    name="segment"
                                    id="segment"
                                    className='products'
                                    onChange={handleDetailsSegment}>
                                    {
                                        segmentData.map((data) => {
                                            return <option value={data.name}>{data.name}</option>
                                        })
                                    }
                                </select>

                            </div>
                            <div className='select-products'>
                                <p className='sub-heading-1st' >Side</p>

                                <select
                                    name="side"
                                    id="side"
                                    className='products'
                                    onChange={handleDetailsCustom}>
                                    {
                                        sideData.map((data) => {
                                            return <option value={data.name}>{data.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className='select-products'>
                                <p className='sub-heading-1st' >Quantity</p>

                                <input
                                    name="quantity"
                                    id="quantity"
                                    className='products'
                                    type="number"
                                    min={0}
                                    max={9999999}
                                    value={addDetails.quantity}
                                    onChange={handleDetailsCustom}
                                >
                                </input>
                            </div>
                            <div className={`select-products ${strikeAndType === true ? 'customDiv' : ''}`}>
                                {/* <div className='select-products customDiv'> */}
                                <p className='sub-heading-1st' >Strike</p>

                                <input
                                    name="strike"
                                    id="strike"
                                    className='products'
                                    type="number"
                                    min={0}
                                    max={10000}
                                    value={addDetails.strike}
                                    onChange={handleDetailsCustom}
                                >
                                </input>
                            </div>
                        </div>
                        <div className={`main-select-products ${custom === true ? 'customDiv' : ''} `}>
                            <div className={`select-products ${strikeAndType === true ? 'customDiv' : ''}`}>
                                <p className='sub-heading-1st' >Type</p>
                                <select
                                    name="type"
                                    id="type"
                                    className='products'
                                    onChange={handleDetailsCustom}>
                                    {
                                        typeData.map((data) => {
                                            return <option value={data.name}>{data.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className='select-products'></div>
                            <div className='select-products'></div>
                            <div className='select-products'></div>
                        </div>
                        <button type='submit' className='next-button'>Add</button>

                    </form>

                    <div className='dtable' >
                    <form onSubmit={handleEditFormSubmit}>
                        <table className={`strategy-table ${table == true ? 'customDiv' : ""}`}>
                            <thead>
                                <tr>
                                    <th>Exchange</th>
                                    <th>Ticker</th>
                                    <th>Strategy</th>
                                    <th>Segment</th>
                                    <th>Expiry</th>
                                    <th>Side</th>
                                    <th>Quantity</th>
                                    <th>Strike</th>
                                    <th>Type</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {details.map((detail) => (
                                    <Fragment>
                                        {editDetailId === detail.id ?
                                (<EditableRow 
                                    editFormData={editFormData}
                            handleEditFormChange={handleEditFormChange}
                                    handleCancelClick={handleCancelClick}
                                />)
                                    : (
                                        <ReadOnlyRow detail={detail}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}/>
                                    )
                                        }
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                        </form>
                        <button type='submit' className={`save-skeleton ${table == true ? 'customDiv' : ""} `} onClick={save}>Save</button>
                        
                        <button type='submit' onClick={makeplot}>Make Plot</button>

                        {plotVisible  && <Plot coordinates= {_coords} vv="aaa"/> }

                        {modal && (
                            <div className="modal">
                                <div onClick={toggleModal} className="overlay"></div>
                                <div className="modal-content">
                                    <h2>Enter Details</h2>
                                    <p><input type='text' placeholder='Enter Name' required className='stName'/></p>
                                    <p><textarea className='stDesc' placeholder='Enter Description' required rows="4" cols="50"></textarea></p>
                                    <button type='submit' className='save-popup' onClick={saveModal}>OK</button>
                                    <button className="close-modal" onClick={toggleModal}>
                                        CLOSE
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}


