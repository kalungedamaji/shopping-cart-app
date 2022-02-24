import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage'


const  App:React.FC = () => {        
    
    return (
        <div>
            <Routes> 
            <Route path='/' element = {<HomePage />}> </Route> 
            <Route path='/cart' element = {<CartPage />} ></Route>
            </Routes> 
        </div>
    )

}

export default App;