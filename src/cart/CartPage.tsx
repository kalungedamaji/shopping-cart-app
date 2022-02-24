import product, {ProductDetails} from "../product/Product";
import React from "react";
import {cartList} from "./AddProductToCart";
interface CartPageProps{
    cartList : ProductDetails[]
}
function CartPage(){
    return <div>
        Shopping cart
        {cartList.map((cartItem :ProductDetails) =>(
            <div key={cartItem.name}>
                <img src ={cartItem.image} alt={cartItem.name}></img>

                <h1> {cartItem.name}</h1>
                <p>{cartItem.description}</p>
                <h4>{cartItem.price}</h4>
            </div>
        ))}
    </div>
}
export default CartPage;