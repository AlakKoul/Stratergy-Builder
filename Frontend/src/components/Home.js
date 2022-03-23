import React, { useEffect, useState , Fragment } from 'react'
import '../styles/Home.css'
import { nanoid } from 'nanoid'
import exchangeData from "./exchange.json"
import tickerData from "./ticker.json"
import segmentData from "./segment.json"
import typeData from "./type.json"
import sideData from "./side.json"
import popularStrategies from "./popularStrategies.json"
import detailPopularStrategies from "./detailPopularStratergies.json"
import detailCustomStrategies from "./detailCustomStrategies.json"
import customStrategies from "./customStrategies.json"
import { Link } from "react-router-dom"
import { ReadOnlyRow } from './ReadOnlyRow'
import { Plot } from './Plot'
// import { EditableRow } from './EditableRow'


export const Home = () => {
    
    const [selectedRadioBtn, setSelectedRadioBtn] = useState('popular');
    const isRadioSelected = (value) => {
        return selectedRadioBtn === value;
    }
    const handleRadioClick = (event) => {
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
        if (segmentVal === 'Future') setStrikeAndType(true);

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
        if (fieldValue === 'Future')
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
    const fetchData = (type, jsonFile, detailJson) => {
        let pId = -1;
        let strategyID = document.querySelector('#' + type);
        for (let pS in jsonFile) {
            if (jsonFile[pS].name === strategyID.value) {
                pId = jsonFile[pS].id;
                break;
            }
        }
        // console.log(pId);
        let tempObj;
        for (let i in detailJson) {
            if (detailJson[i].id === pId) {
                tempObj = { ...detailJson[i] }
                break;
            }
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
        for (let i in tempObj.instruments) {
            console.log("krishna")
            let objMerge = { ...objCommon, ...tempObj.instruments[i] }
            detailsArr.push(objMerge);
        }
        // console.log(detailsArr);
        setDetails(detailsArr);

    }
    const handleDetailsAdd = (event) => {
        event.preventDefault();
        showTable(false);
        const table = document.querySelector('.dtable');
        table.style.display = 'block';
        if (selectedRadioBtn === 'popular') {
            fetchData("strategy", popularStrategies, detailPopularStrategies);
        }
        else if (selectedRadioBtn === 'custom' && addDetails.strategy !== 'custom') {
            fetchData("strategy", customStrategies, detailCustomStrategies);
        }
        else {
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

    const save = () => {
        if (selectedRadioBtn === 'custom' && addDetails.strategy === 'custom') {
            toggleModal();
            let id = detailCustomStrategies.length + 1;
            let instruments = [];
            for (let i in details) {
                let instObj = {
                    "segment": details[i].segment,
                    "side": details[i].side,
                    "quantity": details[i].quantity,
                    "strike": details[i].strike,
                    "type": details[i].type
                }
                instruments.push(instObj);
            }
            let newCustomStrategy = {
                "id": id,
                "name": "",
                "description": "",
                "expiry": details[0].expiry,
                "exchange": details[0].exchange,
                "ticker": details[0].ticker,
                "instruments": instruments
            }
            detailCustomStrategies.push(newCustomStrategy);
        }
        else{

        }
    }

    const openNavbar = () => {
        const navClose = document.querySelector('.navbar-close');
        const navOpen = document.querySelector('.navbar-open');
        navClose.style.display = 'none';
        navOpen.style.display = 'block';
    }
    const closeNavbar = () => {
        const navClose = document.querySelector('.navbar-close');
        const navOpen = document.querySelector('.navbar-open');
        navClose.style.display = 'block';
        navOpen.style.display = 'none';
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

    const saveModal = ()=>{
        let stName =document.querySelector('.stName').value;
        let stDesc =document.querySelector('.stDesc').value;
        // let nD ={
        //     "name":stName,
        //     "description":stDesc
        // }
        // setNameDesc(nD);
        toggleModal();
        let l = detailCustomStrategies.length;
        detailCustomStrategies[l-1].name = stName;
        detailCustomStrategies[l-1].description = stDesc;
        console.log(detailCustomStrategies);

    }

    return (
        <>

            <div className='nav'>
                <div className='navbar-close'>
                    <i className="fa-solid fa-bars fa-2x" onClick={openNavbar}></i>
                </div>
                <div className='navbar-open'>
                    <i class="fa-solid fa-xmark fa-2x" onClick={closeNavbar}></i>
                    <Link className="side-nav-link" to='/read-p-strategy'>Read about Popular Strategies</Link>
                    <Link className="side-nav-link" to='/'>View Saved Strategies</Link>
                    <Link className="side-nav-link" to='/login'>Logout</Link>
                </div>
            </div>

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

                            {/* 

                                export strategy array from api

                                for(let i in strategy){
                                    options.add(strategy[i].name);
                                }
                            */}

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
                                </tr>
                            </thead>
                            <tbody>

                                {details.map((detail) => (
                                    <Fragment>
                                        {/* <EditableRow detail={detail}/> */}
                                        <ReadOnlyRow detail={detail}/>
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                        <button type='submit' className={`save-skeleton ${table == true ? 'customDiv' : ""} `} onClick={save}>Save</button>

                        <Plot/>

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


