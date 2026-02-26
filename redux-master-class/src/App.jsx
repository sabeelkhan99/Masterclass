import React from 'react'
import Products from './components/Products'
import "./App.css";
import ProductsOptimised from './components/ProductsOptimised';
import Counter from './components/Counter';
import ProductUsingRedux from './components/ProductUsingRedux';

const App = () => {
    return (
        <div>
            <h1>Redux Demo</h1>
            {/* <Products/> */}
            {/* <ProductsOptimised/> */}
            <Counter/> 
            {/* <ProductUsingRedux/> */}
        </div>
    )
}

export default App
