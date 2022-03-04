import React, {useContext} from "react";
import CartContext from "../../context/CartContext";
import CartItem from "./CartItem";
interface CartListProps{
    setCartPageStateHandler: () => void
}

const CartList:React.FC<CartListProps>=({setCartPageStateHandler})=>{
    const cartCtx = useContext(CartContext);
    return<div>
        <ul>
            {cartCtx.cartList.map((cartItem ) =>(
                <CartItem cartItem = {cartItem} setCartPageState = {setCartPageStateHandler} key = {cartItem.name}/>
            ))}
        </ul>
    </div>
}
export default CartList;