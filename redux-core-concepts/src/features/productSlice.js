import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProducts =  createAsyncThunk('products/fetchAllProducts', async() => {
    const res = await fetch('https://fakestoreapi.com/produts');
    const data = await res.json();
    return data;
})

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoading: true,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state, action) => {
            state.isLoading = true
        })

        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false
        })

        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            state.error = action.error.message || 'something went wrong';
            state.isLoading = false;
        })
    }
});

export default productsSlice.reducer;