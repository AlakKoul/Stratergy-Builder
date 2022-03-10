import React, { useState } from 'react'
import '../styles/Home.css'
import {nanoid} from 'nanoid'
import data from "./mock-data.json"
export const Home = () => {
    const [details, setDetails]=useState(data);
    const [addDetails, setAddDetails]=useState({
        exchange:'',
        ticker:'',
        segment:'',
        expiry:'',
        side:'',
        quantity:'',
        strike:'',
        type:''
    });
    const handleDetails=(event)=>{
        event.preventDefault();

        const fieldName=event.target.getAttribute('name');
        const fieldValue=event.target.value;
        const newFormData={...addDetails};
        newFormData[fieldName]=fieldValue;

        setAddDetails(newFormData);
    };
    const handleDetailsAdd=(event)=>{
        event.preventDefault();
        const newDetail={
            id: nanoid(),
            exchange: addDetails.exchange,
            ticker:addDetails.ticker,
            segment:addDetails.segment,
            expiry:addDetails.expiry,
            side:addDetails.side,
            quantity:addDetails.quantity,
            strike:addDetails.strike,
            type:addDetails.strike
        };
        const newDetails=[...details,newDetail];
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
                                    <input 
                                        name="exchange" 
                                        id="exchange" 
                                        className='products' 
                                        type="text" 
                                        onChange={handleDetails}
                                    />
                                </div>
                                <div className='select-products'>
                                    <p className='sub-heading-1st'>Ticker</p>

                                    <input 
                                        name="ticker" 
                                        id="ticker" 
                                        className='products'  
                                        type="text" 
                                        onChange={handleDetails}
                                    />
                                </div>
                                <div className='select-products'>
                                        <p className='sub-heading-1st' >Segment</p>

                                        <input 
                                            name="segment" 
                                            id="segment" 
                                            className='products'  
                                            type="text" 
                                            onChange={handleDetails}>
                                            </input>
                                </div>
                            </div>
                            <button type='button' className='next-button'>Next</button>
                            <div className='only-option'>
                                <div className="main-select-products" id='strat'>
                                    <div className='select-products'>
                                        <p className='sub-heading-1st'>Expiry Date</p>
                                            <input 
                                                type="date" 
                                                min={disablePastDate()}
                                                name="expiry" 
                                                className='products'
                                                onChange={handleDetails}
                                            />
                                    </div>
                                    <div className='select-products'>
                                            <p className='sub-heading-1st' >Side</p>

                                            <input 
                                                name="side" 
                                                id="side" 
                                                className='products'  
                                                type="text" 
                                                onChange={handleDetails}>
                                                </input>
                                    </div>
                                    <div className='select-products'>
                                        <p className='sub-heading-1st' >Quantity</p>

                                        <input 
                                            name="quantity" 
                                            id="quantity" 
                                            className='products'  
                                            type="text" 
                                            onChange={handleDetails}>
                                        </input>
                                    </div>
                                </div>
                                <div className="main-select-products">
                                    <div className='select-products'>
                                            <p className='sub-heading-1st' >Strike</p>

                                            <input 
                                                name="strike" 
                                                id="strike" 
                                                className='products'  
                                                type="text" 
                                                onChange={handleDetails}>
                                            </input>
                                    </div>
                                    <div className='select-products'>
                                        <p className='sub-heading-1st' >Type</p>
                                        <input 
                                            name="type" 
                                            id="type" 
                                            className='products'  
                                            type="text" 
                                            onChange={handleDetails}>
                                            </input>
                                    </div>
                                </div>
                            </div>
                            <button type='submit' className='next-button'>Add</button>

                        </form>
                    <div className='dtable'>
                        <table>
                            <thead>
                            <tr>
                                <th>Exchange</th>
                                <th>Ticker</th>
                                <th>Segment</th>
                                <th>Expiry</th>
                                <th>Side</th>
                                <th>Quantity</th> 
                                <th>Strike</th>
                                <th>Type</th>   
                            </tr>
                            </thead>
                            <tbody>
                            {details.map((detail)=>(
                                <tr>
                                <td>{detail.exchange}</td>
                                <td>{detail.ticker}</td>
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


