import React from 'react';
import HomePage from './HomePage'
import {Routes, Route} from 'react-router-dom'
import CartList from './cart/CartList';
import { ProductDetail } from './product/Product';

const cartList:ProductDetail[] = [];

const  App:React.FC = () => {        
    
    return (
        <div>
            <Routes> 
            <Route path='/' element = {<HomePage homePageName="TEAM 1 MEGA MART" cartList={cartList}/>}> </Route> 
            <Route path='/cart' element = {<CartList products={cartList} />} ></Route>
            </Routes> 
        </div>
    )

}

export default App;