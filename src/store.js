import { configureStore } from "@reduxjs/toolkit";
import customerreducer from "./slice/CustomerSlice"

export const store= configureStore({
   reducer:{
    sahana:customerreducer
   }
})

