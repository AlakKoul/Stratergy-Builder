import React from 'react'

export const EditableRow = ({detail}) => {
  return (
      <tr>
        <td>{detail.exchange}</td>
            <td>{detail.ticker}</td>
            <td>{detail.strategy}</td>
            <td>{detail.segment}</td>
            <td>{detail.expiry}</td>
            <td>{detail.side}</td>
            <td>
            <input type="number"
            name="quantity"/>    
            </td>
            <td><input type="number"
            name="strike"/>  </td>
            <td>{detail.type}</td>
      </tr>
  )
}
