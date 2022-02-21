import React from 'react';
import HomePage from './HomePage'
import {Routes, Route} from 'react-router-dom'
import Cart from './cart/Cart';

const  App:React.FC = () => {

    const inputProduct= { image : " "
        , name : "",description : "", price : 0 }

    return (
        <div>
            <Routes> 
            <Route path='/' element = {<HomePage homePageName="TEAM 1 MEGA MART" />}> </Route> 
            <Route path='/cart' element = {<Cart quantity={0} product={inputProduct} />} ></Route>
            </Routes> 
        </div>
    )

}

export default App;