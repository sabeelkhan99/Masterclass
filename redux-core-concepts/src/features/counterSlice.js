import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        // These functions has to be pure and synchronous
        increment: (state, action) => {
            state.count += 1;
        },
        decrement: (state, action) => {
            state.count -=1;
        },
        decrementByAmount: (state, action) => {
            state.count -= action.payload;
        }
    }
});

/*

    actions: {
        increment: ()=>{type: 'counter/increment'}
        decrement: ()=>{type: 'counter/decrement'}
        decrementByAmount: ()=>{type: 'counter/decrementByAmount'}
    }

*/

export const { increment, decrement, decrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;