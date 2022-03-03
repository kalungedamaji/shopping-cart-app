import React, {useState} from "react";
import CartList from "../components/cart/CartList";

const CartPage:React.FC = (() =>{
    const [cartPageState , setCartPageState] = useState(false);
    function setStateHandler() {
        setCartPageState(!cartPageState);
    }
    console.log('in cart page')
    return <div>
        <h2>Your Shopping Cart</h2>
        <CartList setCartPageStateHandler = {setStateHandler}/>
    </div>
})
export default CartPage;