import React from 'react'
import '../styles/StrategyCard.css'
import {Link,useLocation} from "react-router-dom";
import { Plot } from './Plot';
import { useState } from 'react';
import { useEffect } from 'react';



export const ViewStrategy =  (props) => {
    let location = useLocation();


    const makePlot = async(id) =>{
        const SavedStrategyImplementation = async (id) =>{
            try{
            const response = await fetch("http://localhost:8000/api/makeplot/id", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id : id})
              });
             var json = await response.json()
              return json
        }catch(err){
            alert(err)
        }
    }
    
     var data= await SavedStrategyImplementation(id)
     setDetails(data.values.listInstruments);

     var json = data.values

     var common = {
        "Exchange" : json.StockName,
        "Ticker" : json.Ticker,
        "ExpiryDate" : json.ExpiryDate,
        "InstrumentSkeletonId" : json.InvestmentStrategySkeletonId
    }

    setCommon(common);
    setCoords(data.coords)
    
    }
    console.log()
    var str = (location.search && location.search.substring(1)) ? location.search.substring(1) : "0"; 
    //let  data = await makePlot(str)

    // // var details = [];
    // // var commonValues = {"a" : "5"};

    const [details , setDetails] = useState([])
    const [commonValues,setCommon] = useState({
        "Exchange" : "",
        "Ticker" : "",
        "ExpiryDate" : "",
        "InstrumentSkeletonId" : ""
    });
    const [_coords , setCoords] = useState({
        "xCoords" : [],
        "yCoords" : []
    });

    useEffect(async ()=>{
        var str = location.search.substring(1)
        await makePlot(str);
         console.log("after");
         console.log(commonValues);
    },[])

    // var details = data.values.listInstruments;
    // 
   
    // var _coords = 
    
    return (
        <>
       
            <div style={{margin : "50px"}}>
            <h2>Table</h2>
                <table className='view-table'>
                    <thead>
                        <tr>
                            <th>Exchange</th>
                            <th>Ticker</th>
                            <th>Segment</th>
                            <th>Expiry</th>
                            <th>Side</th>
                            <th>Quantity</th>
                            <th>Strike</th>
                            <th>Premium</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details.map((detail) => (
                            <tr>
                                <td>{commonValues.Exchange}</td>
                                <td>{commonValues.Ticker}</td>
                                <td>{detail.segment}</td>
                                <td>{commonValues.ExpiryDate}</td>
                                <td>{detail.Side}</td>
                                <td>{detail.Quantity}</td>
                                <td>{detail.StrikePrice}</td>
                                <td>{detail.Premium}</td>
                                <td>{detail.Type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
            <h2>Graph</h2>
            <Plot coordinates= {_coords} vv="aaa"/>
            </div>
        </>
    )
}
