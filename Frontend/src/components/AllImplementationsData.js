import React, { Component } from 'react'
import StrategyCard from './StrategyCard';

export default class AllImplementationsData extends Component {

  constructor(){
    super();
    this.state = {
      implementationsData : []
    }
  }

  

  componentDidMount(){
    //   const url=  "localhost:8000/api/send/allSavedImplemenations"
      
    //   const response = await fetch(url , {
    //     method  : 'GET',
    //     headers : {
    //       'Content-Type' : 'application/json'
    //     }
    //   });

    //   const json  = await response.json();
    

    const res =[
        {
            "Id": 1,
            "Name": "Buy Call",
            "StockName": "NSE",
            "Ticker": "AARTIIND",
            "ExpiryDate": "2022-03-30T18:30:00.000Z",
            "userId": 2,
            "Description": "Buy the call option",
            "InvestmentStrategySkeletonId": 3,
            "StrategyName": "Long Call",
            "DescriptionSkeleton": "A long call option is, simply, your standard call option in which the buyer has the right, but not the obligation, to buy a stock at a strike price in the future. "
        },
        {
            "Id": 2,
            "Name": "Sell call option",
            "StockName": "NSE",
            "Ticker": "ABB",
            "ExpiryDate": "2022-03-29T18:30:00.000Z",
            "userId": 2,
            "Description": "Selling the call option",
            "InvestmentStrategySkeletonId": 4,
            "StrategyName": "Short Call",
            "DescriptionSkeleton": "In a short call option, the seller promises to sell their shares at a fixed strike price in the future. "
        },
        {
            "Id": 3,
            "Name": "Minimum Loss AARTI IND",
            "StockName": "NSE",
            "Ticker": "AARTIIND",
            "ExpiryDate": "2022-04-01T18:30:00.000Z",
            "userId": 2,
            "Description": "Buying Call and Put at almost same strike price",
            "InvestmentStrategySkeletonId": 5,
            "StrategyName": "Minimum Loss",
            "DescriptionSkeleton": "Buy Call and Put Option at same time and almost equal strike price"
        },
        {
            "Id": 4,
            "Name": "",
            "StockName": "NSE",
            "Ticker": "AAPL",
            "ExpiryDate": "2022-04-09T18:30:00.000Z",
            "userId": 2,
            "Description": " ",
            "InvestmentStrategySkeletonId": 3,
            "StrategyName": "Long Call",
            "DescriptionSkeleton": "A long call option is, simply, your standard call option in which the buyer has the right, but not the obligation, to buy a stock at a strike price in the future. "
        }
    ]

    this.setState({implementationsData : res});
  }

  render() {
    return (
      <>
      <div className='allImplementations'>
      <h1 className='all-imp'> Strategy Implementations </h1>

        <div >
          
            
            <div>
              {this.state.implementationsData.map((element)=>{
                return <div key={element.Id}>
                      <StrategyCard Implementation={element}/>
                   </div> 
              })}
            </div>
        </div>
              </div>
      </>
    )
  }
}

