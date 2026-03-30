import React from 'react'
import AutoSuggestion from './components/AutoSuggestion'
import "./App.css";
import AutoSuggestionOptimised from './components/AutoSuggestionOptimised';

const App = () => {
    return (
        <div className='container'>
            <h1>Welcome to react</h1>
            {/* <AutoSuggestion/> */}
            <AutoSuggestionOptimised/>
        </div>
    )
}

export default App
