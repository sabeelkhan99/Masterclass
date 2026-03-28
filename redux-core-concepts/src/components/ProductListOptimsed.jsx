import React, { useEffect, useReducer, useState } from 'react'
import Product from './Product';

const httpReducer = (state, action) => {
    if (action.type === 'PENDING') {
        return {
            products: [],
            isLoading: true,
            error: null
        }
    }
    if (action.type === 'SUCCESS') {
        return {
            products: action.payload,
            isLoading: false,
            error: null
        }
    }
     if (action.type === 'ERROR') {
        return {
            products: null,
            isLoading: false,
            error: action.error
        }
    }
}

const ProductListOptimised = () => {

    const [httpState, dispatch] = useReducer(httpReducer, {
        products: [],
        isLoading: true,
        error: null
    })

    useEffect(() => {
        async function makeApiCall() {
            try {
                dispatch({ type: 'PENDING' });
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                dispatch({ type: 'SUCCESS', payload: data });
            }
            catch (err) {
                console.log(err);
                dispatch({ type: 'ERROR', error: err.message || 'something went wrong' });
            }
        }

        makeApiCall();
    }, []);

    return (
        <div className='grid'>
            {httpState.error && <p>{ httpState.error}</p>}
            {httpState.isLoading && <p>Loading products</p>}
            {
                httpState.products && httpState.products.map((p) => {
                    return <Product key={p.id} product={ p } />
                })
            }
        </div>
    )
}

export default ProductListOptimised
