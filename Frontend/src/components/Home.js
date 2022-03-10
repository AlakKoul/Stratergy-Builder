import React, { useState } from 'react'
import '../styles/Home.css'
import {nanoid} from 'nanoid'
import data from "./mock-data.json"
export const Home = () => {
    const [details, setDetails]=useState(data);
    const [addDetails, setAddDetails]=useState({
        exchange:'',
        ticker:'',
        expiry:''
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
            expiry:addDetails.expiry
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
                    <div >
                        <form onSubmit={handleDetailsAdd} className="main-select-products">
                            <div className='select-products'>
                                <p className='sub-heading-1st'>Exchange</p>
                                <input 
                                    name="exchange" 
                                    id="exchange" 
                                    className='products' 
                                    type="text" 
                                    placeholder='choose one option'
                                    onChange={handleDetails}>

                                </input>
                            </div>
                            <div className='select-products'>
                                <p className='sub-heading-1st'>Ticker</p>

                                <input 
                                    name="ticker" 
                                    id="ticker" 
                                    className='products'  
                                    type="text" 
                                    placeholder='choose one option'
                                    onChange={handleDetails}>
                                    </input>
                            </div>
                            <div className='select-products'>
                                <p className='sub-heading-1st'>Expiry Date</p>
                                    <input 
                                    type="date" 
                                    min={disablePastDate()}
                                    name="expiry" 
                                    className='products'
                                    onChange={handleDetails}/>
                            </div>
                            <button type='submit'>ADD</button>
                        </form>
                    </div>
                    <div className='dtable'>
                        <table>
                            <thead>
                            <tr>
                                <th>Exchange</th>
                                <th>Ticker</th>
                                <th>Expiry</th>    
                            </tr>
                            </thead>
                            <tbody>
                            {details.map((detail)=>(
                                <tr>
                                <td>{detail.exchange}</td>
                                <td>{detail.ticker}</td>
                                <td>{detail.expiry}</td>    
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


