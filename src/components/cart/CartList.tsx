import React, {useContext} from "react";
import CartContext from "../../context/CartContext";
import CartItem from "./CartItem";
import {ProductDetails} from "../products/Product";

const CartList:React.FC=()=>{
    const cartCtx = useContext(CartContext);
    console.log(cartCtx.cartList ,'from cartlist')
    return<div>
        <ul>
            {cartCtx.cartList.map((cartItem ) =>(
                <CartItem cartItem = {cartItem} key = {cartItem.name}/>
            ))}
        </ul>
    </div>
}
export default CartList;