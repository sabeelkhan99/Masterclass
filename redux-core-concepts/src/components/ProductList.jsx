import React, { useEffect, useState } from 'react'
import Product from './Product';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function makeApiCall() {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setProducts(data);
                setIsLoading(false);
            }
            catch (err) {
                setError('Something went wrong')
                setIsLoading(false);
            }
        }

        makeApiCall();
    }, []);

    return (
        <div className='grid'>
            {error && <p>{ error}</p>}
            {isLoading && <p>Loading products</p>}
            {
                products.map((p) => {
                    return <Product key={p.id} product={ p } />
                })
            }
        </div>
    )
}

export default ProductList
