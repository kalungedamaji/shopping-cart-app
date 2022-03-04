import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../store/CartContext";

interface CartPageProps {
    cartPageName: string
}

const CartPageHeader:React.FC<CartPageProps> = ({cartPageName}) => {

    const cartCtx = useContext(CartContext);
    
    let navigate = useNavigate(); 

    const routeChange = () =>{       
      let path = `/`; 
      navigate(path);
    } 

    return ( 
    <div>
        <h1>{cartPageName}</h1>
        <h4>Cart Total Price: {cartCtx.totalCartPrice()}</h4>
        <button onClick={routeChange}>Home</button>
   </div> 
    )
}

export default CartPageHeader;