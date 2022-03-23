import React from 'react'

export const ReadOnlyRow = ({detail}) => {
    return (
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
    )
}
