import React, {useContext, useState} from "react";
import {CartItemType} from "../products/Product";
import CartContext from "../../context/CartContext";

interface CartItemProps {
    cartItem : CartItemType
}

const CartItem:React.FC<CartItemProps>=({cartItem})=>{
    const cartCtx = useContext(CartContext);

    // let initialQuantity = cartCtx.getQuantityOfCartItem(cartItem);
    let initialQuantity = 1;
    const [quantity, setQuantity] = useState(initialQuantity);
    function increaseQuantity() {
        setQuantity(quantity+1);
    }
    // const cartCtx = useContext(CartContext);
    // function increaseQuantity(){
    //    qty =   cartCtx.increaseQuantity(cartItem)
    // }

    function decreaseQuantity() {
        setQuantity(quantity-1)
    }

    return<div>
        <li key={cartItem.name}>
            <img src ={cartItem.image} alt={cartItem.name}></img>
            <h1> {cartItem.name}</h1>
            <h4>Price : INR {cartItem.price}</h4>
            <h4>Total : INR {quantity * cartItem.price}</h4>
            <button onClick={increaseQuantity}>+</button>
            <p>Qty: {quantity}</p>
            <button onClick={decreaseQuantity}>-</button>
        </li>
    </div>
}
export default CartItem;