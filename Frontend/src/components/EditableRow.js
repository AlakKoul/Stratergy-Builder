import React from 'react'

export const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
      <tr>
        <td>{editFormData.exchange}</td>
            <td>{editFormData.ticker}</td>
            <td>{editFormData.strategy}</td>
            <td>{editFormData.segment}</td>
            <td>{editFormData.expiry}</td>
            <td>{editFormData.side}</td>
            <td>
            <input type="number"
            value = {editFormData.quantity}
            onChange={handleEditFormChange}
            name="quantity"/>    
            </td>
            <td><input type="number"
            value={editFormData.strike}
            onChange={handleEditFormChange}
            name="strike"/>  </td>
            <td>{editFormData.type}</td>
            <td>
            <button
          type="submit"
        >
          Save
        </button>
        <button type="button" onClick={handleCancelClick} >
          Cancel
        </button>
            </td>
      </tr>
  )
}
