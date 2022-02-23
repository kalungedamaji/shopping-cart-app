import React from 'react';
import HomePage from './HomePage'
import {Routes, Route} from 'react-router-dom'
import CartList from './cart/CartList';


const  App:React.FC = () => {        
    
    return (
        <div>
            <Routes> 
            <Route path='/' element = {<HomePage homePageName="TEAM 1 MEGA MART" />}> </Route> 
            <Route path='/cart' element = {<CartList />} ></Route>
            </Routes> 
        </div>
    )

}

export default App;