import React, { createContext} from "react";
import  {ProductDetails} from "../components/product/Product";
interface CartContextType{
    cartList : ProductDetails[],
    addToCart(product: ProductDetails) :void
}
const CartContext = createContext<CartContextType>({
    cartList: [],
    addToCart: (product) => {}
});

export const CartContextProvider:React.FC=((props)=>{
    const userCartList:ProductDetails[]=[]
    function addToCartHandler(product:ProductDetails) {

        userCartList.push(product);
    }
    const context:CartContextType = {
        cartList: userCartList,
        addToCart: addToCartHandler
    }
    return (<CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>)
    })
export default CartContext;