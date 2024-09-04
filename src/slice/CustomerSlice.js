import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const customerslice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        addCustomer(state, action) {
            state.push(action.payload)
        }
        ,
        removeCustomer(state, action) {
            const index = action.payload;
            return state.filter((value, i) => i !== index)
        }



    }
})

export const { addCustomer, removeCustomer } = customerslice.actions

export default customerslice.reducer