import './App.css'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router';
import Login from './pages/Login';
import ProductsDetails from './pages/ProductDetails';
import Layout from './components/Layout';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/products/:productId' element={ <ProductsDetails/> } />
            </Routes>
        </Layout>
    )
}

export default App
