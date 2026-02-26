import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counterSlice';
import productSlice from '../features/productSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        productState: productSlice
        //state : stateUpdating Reducer
    }
})