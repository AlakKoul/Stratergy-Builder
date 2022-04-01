import React, { Component } from 'react'

export default class StrategyCard extends Component {
  render() {

    let implementation = this.props.Implementation;
    
    return (
        <>

            <div class="card">
              <h5 class="card-header">{implementation.Name}</h5>
              <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-title"><b>Strategy</b>: {implementation.StrategyName}</p>
                <p class="card-text"> <b>Strategy Description</b> : {implementation.DescriptionSkeleton}</p>
                <p class="card-text"> <b>Description</b> : {implementation.Description}</p>
                <button type="button" class="btn btn-outline-secondary">{implementation.StockName}</button>
                <button type="button" class="btn btn-outline-success">{implementation.Ticker}</button>
              </div>
            </div>
            <br/>
        </>
      
    )
  }
}
