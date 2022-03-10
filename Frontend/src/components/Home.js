import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import { nanoid } from 'nanoid'
import data from "./mock-data.json"
import exchangeData from "./exchange.json"
import tickerData from "./ticker.json"
import strategyData from "./strategies.json"
import segmentData from "./segment.json"
import typeData from "./type.json"
import sideData from "./side.json"


export const Home = () => {
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
        strategy:strategyVal,
        segment: segmentVal,
        expiry: '',
        side: sideVal,
        quantity:'',
        strike: '',
        type: typeVal
    };
     setAddDetails(newDetail);
    }, [])
    
    
    const [details, setDetails] = useState(data);
    const [addDetails, setAddDetails] = useState({
        exchange: '',
        ticker: '',
        strategy:'',
        segment: '',
        expiry: '',
        side: '',
        quantity: '',
        strike: '',
        type: ''
    });
    const handleDetails = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = { ...addDetails };
        newFormData[fieldName] = fieldValue;

        setAddDetails(newFormData);
    };
    const handleDetailsAdd = (event) => {
        event.preventDefault();
        const newDetail = {
            id: nanoid(),
            exchange: addDetails.exchange,
            ticker: addDetails.ticker,
            strategy:addDetails.strategy,
            segment: addDetails.segment,
            expiry: addDetails.expiry,
            side: addDetails.side,
            quantity: addDetails.quantity,
            strike: addDetails.strike,
            type: addDetails.strike
        };
        const newDetails = [...details, newDetail];
        setDetails(newDetails);
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
    return (
        <>

            <div className='nav'>
                <div className='navbar-close'>
                    <i className="fa-solid fa-bars fa-2x" onClick={openNavbar}></i>
                </div>
                <div className='navbar-open'>
                    <i class="fa-solid fa-xmark fa-2x" onClick={closeNavbar}></i>
                    <a className="side-nav-link" href='/'>Read about Popular Strategies</a>
                    <a className="side-nav-link" href='/'>View Saved Strategies</a>
                    <a className="side-nav-link" href='/'>Logout</a>
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
                                    onChange={handleDetails}
                                    onLoad={handleDetails}
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
                                    onChange={handleDetails}
                                    onLoad={handleDetails}
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
                                    name="expiry"
                                    className='products'
                                    onChange={handleDetails}
                                    onLoad={handleDetails}
                                />
                            </div>
                            <div className='select-products'>
                                <p className='sub-heading-1st'>Strategy</p>

                                <select
                                    name="strategy"
                                    id="strategy"
                                    className='products'
                                    onChange={handleDetails}
                                    onLoad={handleDetails}
                                >
                                    {
                                        strategyData.map((data) => {
                                            return <option value={data.name}>{data.name}</option>
                                        })
                                    }</select>
                            </div>

                            {/* 

                                export strategy array from api

                                for(let i in strategy){
                                    options.add(strategy[i].name);
                                }


*/}


                        </div>
                        <button type='button' className='next-button'>Next</button>
                        <div className="main-select-products" id='strat'>
                            <div className='select-products'>
                                <p className='sub-heading-1st' >Segment</p>

                                <select
                                    name="segment"
                                    id="segment"
                                    className='products'
                                    onChange={handleDetails}
                                    onLoad={handleDetails}>
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
                                    onChange={handleDetails}
                                    onLoad={handleDetails}>
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
                                    onChange={handleDetails}
                                    onLoad={handleDetails}>
                                </input>
                            </div>
                            <div className='select-products'>
                                <p className='sub-heading-1st' >Strike</p>

                                <input
                                    name="strike"
                                    id="strike"
                                    className='products'
                                    type="number"
                                    min={0}
                                    onChange={handleDetails}
                                    onLoad={handleDetails}>
                                </input>
                            </div>
                        </div>
                        <div className="main-select-products">
                            <div className='select-products'>
                                <p className='sub-heading-1st' >Type</p>
                                <select
                                    name="type"
                                    id="type"
                                    className='products'
                                    onChange={handleDetails}
                                    onLoad={handleDetails}>
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
                    <div className='dtable'>
                        <table>
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
                                    <tr>
                                        <td>{detail.exchange}</td>
                                        <td>{detail.ticker}</td>
                                        <td>{detail.strategy}</td>
                                        <td>{detail.segment}</td>
                                        <td>{detail.expiry}</td>
                                        <td>{detail.side}</td>
                                        <td>{detail.quantity}</td>
                                        <td>{detail.strike}</td>
                                        <td>{detail.type}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </>
    )
}


