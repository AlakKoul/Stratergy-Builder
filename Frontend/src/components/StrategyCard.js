import React, { Component } from 'react'
import { ViewStrategy } from './ViewStrategy';
import '../styles/StrategyCard.css'

export default class StrategyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }
  render() {
    let implementation = this.props.Implementation;
    return (
        <>

            <div class="card" id='view-card' onClick={()=>{this.setState({ toggle: !(this.state.toggle) })}}>
              <h5 class="card-header">{implementation.Name}</h5>
              <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-title"><b>Strategy</b>: {implementation.StrategyName}</p>
                <p class="card-text"> <b>Strategy Description</b> : {implementation.DescriptionSkeleton}</p>
                <p class="card-text"> <b>Description</b> : {implementation.Description}</p>
                <p class="card-text"> <b>Stock</b> : {implementation.StockName}</p>
                <p class="card-text"> <b>Ticker</b> : {implementation.Ticker}</p>
              </div>
            </div>
            <br/>
            {
              this.state.toggle && <ViewStrategy implementation={implementation}/>
            }
            <br/>
        </>
      
    )
  }
}


