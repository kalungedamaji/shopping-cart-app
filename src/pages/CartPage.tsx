import React, {useContext, useState} from "react";
import CartList from "../components/cart/CartList";
import CartContext from "../context/CartContext";
const CartPage:React.FC = (() =>{
    const [cartPageState , setCartPageState] = useState(false);
    function setStateHandler() {
        setCartPageState(!cartPageState);
    }
    const cartCtx = useContext(CartContext);
    return <div>
        <h2>Your Shopping Cart</h2>
        <h3>Subtotal : {cartCtx.totalPrice()}</h3>
        <CartList setCartPageStateHandler = {setStateHandler}/>
    </div>
})
export default CartPage;