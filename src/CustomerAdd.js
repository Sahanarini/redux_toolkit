import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCustomer } from './slice/CustomerSlice';

function CustomerAdd() {

    const [input, setInput] = useState("");
   
    const dispatch = useDispatch()


    function customerHandler() {
        if (input) {
            dispatch(addCustomer(input));
            setInput("");
        }
    }
    return (
        <div>
            <h1>Customer Add</h1>
            <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
            <button onClick={customerHandler}>add</button>
        </div>
    )
}

export default CustomerAdd


