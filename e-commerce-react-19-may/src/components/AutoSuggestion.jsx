import React, {useEffect, useState} from 'react';

async function fetchProducts(query) {
    console.log('API Called');
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await res.json();
    return data;
}

const AutoSuggestion = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    // useEffect is executed when it is mounted first time, and then it is executed when query is updated.
    useEffect(() => {
        async function makeApiCall() {
            if (query.trim().length === 0) {
                return;
            }
            const data = await fetchProducts(query);
            setResults(data.products);
        }
        makeApiCall()
    }, [query]);

    const inputChangeHandler = (event) => {
        setQuery(event.target.value); //sam
    }
    return (
        <section className='container'>
            <h1>E-Commerce: Auto Suggestion</h1>
            <input onChange={inputChangeHandler} type="text" placeholder='Search Products' />
            
            <div>
                {
                    results.map((product) => {
                        return <div key={product.id} className='product'>
                            <img src={product.thumbnail} />
                            <p>{product.description}</p>
                            <h5>$ { product.price}</h5>
                        </div>
                    })
                }
            </div>
          
        </section>
    )
}

export default AutoSuggestion