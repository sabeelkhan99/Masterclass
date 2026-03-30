import React, { useEffect, useRef, useState } from 'react'

async function searchProducts(query) {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await res.json();
    return data;
}

const AutoSuggestionOptimised = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const timerIdRef = useRef();

    useEffect(() => {
        async function makeApiCall() {
            const res = await searchProducts(query);
            // Out of the response we are grabbing the products key and placing inside results
            setResults(res.products);
        }
        makeApiCall();
    }, [query]);

    const inputChangeHandler = (event) => {
        // whatever is being typed in input is set to `query`
        clearTimeout(timerIdRef.current);
        timerIdRef.current  = setTimeout(() => {
            setQuery(event.target.value);
        }, 300);
    }

    return (
        <div className='autosuggestion'>
            <input onChange={inputChangeHandler} type="text" placeholder='Search' />
            <section>
                {
                    results.map((item) => {
                        return <article key={item.id} className='item'>
                            <img src={item.thumbnail} alt={item.title} />
                            <span>{ item.title }</span>
                        </article>
                    })
                }
            </section>
        </div>
    )
}

export default AutoSuggestionOptimised;
