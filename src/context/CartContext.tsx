import React, {createContext, useState} from "react";
import  {ProductDetails} from "../components/products/Product";
interface CartContextType{
    cartList : ProductDetails[],
    addToCart(product: ProductDetails) :void
}
const CartContext = createContext<CartContextType>({
    cartList: [],
    addToCart: (product) => {}
});

export const CartContextProvider:React.FC=((props)=>{
    const [userCartList, setUserCartList] = useState<ProductDetails[]>([])

    //const userCartList:ProductDetails[]=[]
    console.log("initialising...")
    function addToCartHandler(product:ProductDetails) {

        //userCartList.push(product);
        setUserCartList([...userCartList, product])
        console.log("called handler")

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