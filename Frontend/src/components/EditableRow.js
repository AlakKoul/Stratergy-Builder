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

               <div class="col-xs-2">
               <input type="number"
               value = {editFormData.quantity}
               onChange={handleEditFormChange}
               class="form-control"
               title = "Please Enter Integer Value"
               name="quantity"/>   
               </div> 
            </td>

            
            <td >
              {
                  (editFormData.segment.toLowerCase()!=='option') ?
                   <div class="col-s-2">
                      <input type="number"
                    value={editFormData.price}
                    onChange={handleEditFormChange}
                    class="form-control"
                    title = "Please Enter Integer Value"
                    name="price"/> 
                    </div>
                    : 
                    '_'
              }
             </td>
            

            <td>
              {
                  (editFormData.segment.toLowerCase()==='option') ?
                  <div class="col-xs-2">
                  <input type="number"
                  value={editFormData.strike}
                  onChange={handleEditFormChange}
                  class="form-control"
                  title = "Please Enter Integer Value"
                  name="strike"/>  
                  </div> 
                  :
                  '_'
              }
          
            </td>

            <td>
              {
                  (editFormData.segment.toLowerCase()==='option') ?
                  <div class="col-xs-2">
                  <input type="number"
                  value={editFormData.premium}
                  onChange={handleEditFormChange}
                  class="form-control"
                  title = "Please Enter Integer Value"
                  name="premium"/>  
                  </div> 
                  : 
                  '_'
              }
           </td>

            <td>{editFormData.type}</td>
            <td>

            {/* <svg type="submit" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
          </svg> */}
            <button class="btn btn-outline-dark"
          type="submit"
        >
          Save
        </button>

      <svg onClick={handleCancelClick} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
        {/* <button type="button"  >
          Cancel
        </button> */}
            </td>
      </tr>
  )
}
