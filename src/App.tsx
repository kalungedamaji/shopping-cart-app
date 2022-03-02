import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/home-page/HomePage';
import CartPage from './pages/cart-page/CartPage'
import { CartContextProvider } from './store/CartContext';


const  App:React.FC = () => {        
    
    return (
        <div>
            <CartContextProvider >
            <Routes> 
            <Route path='/' element = {<HomePage />}> </Route> 
            <Route path='/cart' element = {<CartPage />} ></Route>
            </Routes> 
            </CartContextProvider>
        </div>
    )

}

export default App;