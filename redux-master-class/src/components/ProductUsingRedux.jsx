import React, { act, useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../features/productSlice';


const ProductUsingRedux = () => {

    const { product, error, isLoading } = useSelector((store) => store.productState);
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(fetchProduct());
    }, []);

    return (
        <div>
            {error && <p>{ error }</p>}
            {isLoading && <p>Loading...</p>}
            {product &&
                <figure className='product'>
                    <img src={product.image} alt="" />
                    <figcaption>
                        <h3>{product.title}</h3>
                        <h4>$ {product.price}</h4>
                        <p>{product.description}</p>
                        <button>Buy Now</button>
                    </figcaption>
                </figure>
            }
        </div>
    )
}

export default ProductUsingRedux;
