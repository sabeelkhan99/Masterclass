import React, { useEffect, useReducer, useState } from 'react'
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../features/productSlice';

const ProductsWithRedux = () => {

    const productState = useSelector((store) => store.products);
    const dispatch = useDispatch();

    console.log(productState);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);

    return (
        <div className='grid'>
            {productState.error && <p>{ productState.error}</p>}
            {productState.isLoading && <p>Loading products</p>}
            {
                productState.products && productState.products.map((p) => {
                    return <Product key={p.id} product={ p } />
                })
            }
        </div>
    )
}

export default ProductsWithRedux;
