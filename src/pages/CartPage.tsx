import product, {ProductDetails} from "../components/product_relatables/product/Product";
import React, {useContext} from "react";
import CartContext from "../context/CartContext";

function CartPage(){
    const CartCtx = useContext(CartContext);

    return <div>
        Shopping cart
        <ul>
        {CartCtx.cartList.map((cartItem :ProductDetails) =>(
            <li key={cartItem.name}>
                <img src ={cartItem.image} alt={cartItem.name}></img>
                <h1> {cartItem.name}</h1>
                <p>{cartItem.description}</p>
                <h4>{cartItem.price}</h4>
            </li>
        ))}
        </ul>
    </div>
}
export default CartPage;