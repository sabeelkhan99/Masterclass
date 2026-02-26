import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value += 1; //Immer
        },
        decrement: (state, action) => {
            state.value -= 1;
        }
    }
});

/*
    actions: {
        increment: ()=>{
                return {type: 'increment'}
        },
        decrement: ()=>{
                return {type: 'decrement'}
        }
    }
*/

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

