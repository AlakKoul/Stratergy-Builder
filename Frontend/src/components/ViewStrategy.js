import React from 'react'
import '../styles/StrategyCard.css'
import { Plot } from './Plot';
export const ViewStrategy = (props) => {
    let { implementation } = props;
    const details= [
        {
            "exchange":"exchange",
            "ticker":"ticker",
            "strategy":"strategy",
            "segment":"segment",
            "expiry":"expiry",
            "side":"side",
            "quantity":"quantity",
            "strike":"strike",
            "type":"type",
            "actions":"actions"
        }
    ]
    return (
        <>
            <div>
            <h3>Table</h3>
                <table className='view-table'>
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
                                <td>{detail.actions}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
            <h3>Graph</h3>
            {/* <Plot coordinates= {_coords} vv="aaa"/> */}
            </div>
        </>
    )
}
