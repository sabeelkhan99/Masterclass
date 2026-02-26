import React, { useEffect, useState } from 'react'

async function fetchProducts() {
    const res = await fetch('https://fakestoreapi.com/produts/1');
    const data = await res.json();
    return data;
}

const Products = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function makeApiCall() {
            try {
                setIsLoading(true);
                const data = await fetchProducts();
                setProduct(data);
                setIsLoading(false);
            }
            catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        }

        makeApiCall();
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

export default Products
