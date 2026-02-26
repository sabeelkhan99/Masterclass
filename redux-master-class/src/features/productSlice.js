import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk('product/fetchProduct', async () => {
    const res = await fetch('https://fakestoreapi.com/products/1');
    const data = await res.json();
    return data;
});

const initialState = {
    product: null,
    isLoading: false,
    error: null
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.product = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.error = action.error?.message;
                state.isLoading = false;
            })
    }
});

export default productSlice.reducer;
