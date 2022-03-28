import React from 'react'

export const ReadOnlyRow = ({detail, handleEditClick, handleDeleteClick}) => {
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
            <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, detail)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(detail.id)} >
          Delete
        </button>
      </td>
        </tr>
    )
}
