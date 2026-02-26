import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../features/counterSlice';

const Counter = () => {

    const count = useSelector((store) => store.counter.value);
    const dispatch = useDispatch();

    const incrementCountHandler = () => {
        dispatch(increment());
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={incrementCountHandler}>++</button>
            <button onClick={()=> dispatch(decrement())}>--</button>
        </div>
    )
}

export default Counter
