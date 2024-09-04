import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCustomer } from './slice/CustomerSlice'

function CustomerView() {
 
const dispatch =useDispatch()
  const cust = useSelector((state) => state.sahana)

  function del(index){
    return()=>{
        dispatch(removeCustomer(index))
    }
  }

  return (
    <div>
        <h1>Customer View</h1>
      <ul>
        {
            cust.map((customer, index) => <li key={index}>{customer}
            <button onClick={del(index)}>delete</button></li>)
        }
      </ul>
    </div>
  )
}

export default CustomerView
