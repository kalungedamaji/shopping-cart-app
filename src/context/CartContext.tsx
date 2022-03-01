import React, {createContext, useState} from "react";
import {CartItemType} from "../components/products/Product";

interface CartContextType{
    cartList : CartItemType[],
    addToCart(product: CartItemType) :void,
}

const CartContext = createContext<CartContextType>({
        cartList: [],
        addToCart: (product) => {},
});

export const CartContextProvider:React.FC=((props)=>{
    const userCartList:CartItemType[]=[]
    function addToCartHandler(product:CartItemType) {
        userCartList.push(product);
    }
    const context:CartContextType = {
        cartList: userCartList,
        addToCart: addToCartHandler,
    }
    return (<CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>)
    })
export default CartContext;

