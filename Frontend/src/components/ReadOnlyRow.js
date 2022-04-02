import React from 'react'
//import DeleteIcon from '@mui/icons-material/Delete';

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
            <td>{detail.price}</td>
            <td>{detail.strike}</td>
            <td>{detail.premium}</td>
            <td>{detail.type}</td>
            <td>

            <button
          type="button"
          onClick={(event) => handleEditClick(event, detail)}
        >
          Edit
        </button>
        {/* <button type="button"  >
          Delete
        </button> */}

        <svg data-testid="DeleteIcon" onClick={() => handleDeleteClick(detail.id)}></svg>
      
      </td>
        </tr>
    )
}
