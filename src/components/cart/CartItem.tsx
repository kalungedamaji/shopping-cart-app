import React from "react";
import {ProductDetails} from "../products/Product";


interface CartItemProps {
    cartItem : ProductDetails
}

const CartItem:React.FC<CartItemProps>=({cartItem})=>{
    const qty = 1;
    return<div>
        <li key={cartItem.name}>
            <img src ={cartItem.image} alt={cartItem.name}></img>
            <h1> {cartItem.name}</h1>
            <h4>Price : INR {cartItem.price}</h4>
            <h4>Total : INR {qty * cartItem.price}</h4>
            <button>+</button>
            <p>{qty}</p>
            <button>-</button>
        </li>
    </div>
}
export default CartItem;