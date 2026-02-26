import React, { act, useEffect, useReducer, useState } from 'react'

async function fetchProducts() {
    const res = await fetch('https://fakestoreapi.com/produts/1');
    const data = await res.json();
    return data;
}

const productReducer = (state, action)=> {
    if (action.type === 'PENDING') {
        return {
            product: null,
            isLoading: true,
            error: null
        }
    }

    if (action.type === 'SUCCESS') {
        return {
            product: action.payload,
            isLoading: false,
            error: null
        }
    }

    if (action.type === 'ERROR') {
        return {
            product: null,
            isLoading: false,
            error: action.error
        }
    }

    throw new Error('Invalid Action');
}

const ProductsOptimised = () => {

    const [state, dispatch] = useReducer(productReducer, {
        product: null,
        isLoading: false,
        error: null
    })

    useEffect(() => {
        async function makeApiCall() {
            try {
                dispatch({ type: 'PENDING' });
                const data = await fetchProducts();
                dispatch({ type: 'SUCCESS', payload: data });
            }
            catch (err) {
                dispatch({type: 'ERROR', error: err.message})
            }
        }

        makeApiCall();
    }, []);

    return (
        <div>
            {state.error && <p>{ state.error }</p>}
            {state.isLoading && <p>Loading...</p>}
            {state.product &&
                <figure className='product'>
                    <img src={state.product.image} alt="" />
                    <figcaption>
                        <h3>{state.product.title}</h3>
                        <h4>$ {state.product.price}</h4>
                        <p>{state.product.description}</p>
                        <button>Buy Now</button>
                    </figcaption>
                </figure>
            }
        </div>
    )
}

export default ProductsOptimised;
