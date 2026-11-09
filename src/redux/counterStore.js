import { configureStore } from "@reduxjs/toolkit";
import counterSlices from "./slices/counterSlices";

const  counterStore = configureStore({
    reducer:{
       counterReducer : counterSlices
    }
})

export default counterStore