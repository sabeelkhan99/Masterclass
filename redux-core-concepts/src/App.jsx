import React from 'react'
import ProductList from './components/ProductList'
import "./App.css";
import ProductListOptimised from './components/ProductListOptimsed';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counterSlice';
import ProductsWithRedux from './components/ProductsWithRedux';

const App = () => {

    const count = useSelector((store) => store.counter.count);
    const dispatch = useDispatch();

  return (
    <div>
          <h1>Hello from React App</h1>
          <h2>{count}</h2>
          <button onClick={()=> dispatch(increment())}>++</button>
          <button onClick={()=> dispatch(decrement())}>--</button>
          {/* <ProductListOptimised/> */}
          <ProductsWithRedux/>
    </div>
  )
}

export default App
