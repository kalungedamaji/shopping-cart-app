import React, {useContext, useState} from "react";
import {CartItemType} from "../products/Product";
import CartContext from "../../context/CartContext";
import Swal from 'sweetalert2';
import CartPage from "../../pages/CartPage";


interface CartItemProps {
    cartItem : CartItemType
}

const CartItem:React.FC<CartItemProps>=({cartItem})=>{
    const cartCtx = useContext(CartContext);

    // let initialQuantity = cartCtx.getQuantityOfCartItem(cartItem);
    let initialQuantity = 1;
    const [quantity, setQuantity] = useState(initialQuantity);
    function increaseQuantity() {
        if(quantity<10) {
            setQuantity(quantity + 1);
        }
        else{
            Swal.fire({
                icon: 'warning',
                title: 'Maximum Limit',
                text : 'Reached maximum limit , quantity can not be increased',
                confirmButtonText: 'OK'
            }).then()
        }
    }
    // const cartCtx = useContext(CartContext);
    // function increaseQuantity(){
    //    qty =   cartCtx.increaseQuantity(cartItem)
    // }

    function decreaseQuantity() {
        if(quantity===1){
            Swal.fire({
                icon:'question',
                title:'Remove from cart?',
                text:'Do you want to remove this item from cart.',
                showCancelButton:true,
                confirmButtonText:'YES',
                cancelButtonText:'NO',
                confirmButtonColor: '#3085d6',
            }).then((result) =>{
                if(result.isConfirmed){
                    cartCtx.removeFromCart(cartItem);

                }
            })
        }
        else{
            setQuantity(quantity-1)
        }
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