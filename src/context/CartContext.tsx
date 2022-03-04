import React, {createContext, useState} from "react";
import {CartItemType} from "../components/products/Product";
import cartItem from "../components/cart/CartItem";

interface CartContextType{
    cartList : CartItemType[],
    addToCart(product: CartItemType) :void,
    removeFromCart(cartItem: CartItemType): void,
    totalPrice() : number,
    updateQuantity(quantity: number, cartItem: CartItemType) : void
}

const CartContext = createContext<CartContextType>({
        cartList: [],
        addToCart: (product) => {},
        removeFromCart: (cartItem) => {},
        totalPrice:() =>{return 0},
        updateQuantity:(quantity, cartItem) =>{}
});

export const CartContextProvider:React.FC=((props)=>{
   const userCartList:CartItemType[]=[]
    function addToCartHandler(product:CartItemType) {
        userCartList.push(product);
        console.log(userCartList,'list from add to cart handler')
    }

    function removeFromCartHandler(cartItem :CartItemType) {
        const index = userCartList.findIndex((element) =>element === cartItem);
        console.log(cartItem,'cartItem from remove handler')
        userCartList.splice(index,1)
        //userCartList.filter((product) => cartItem.name !== product.name);
        console.log(userCartList,'list after spice')
    }

    function totalPriceHandler() {
        let totalPrice = 0;
        userCartList.map((cartItem) =>{
            totalPrice = totalPrice + (cartItem.price* cartItem.quantity)
        })
        return totalPrice;
    }

    function updateQuantityHandler(quantity:number , cartItem: CartItemType) {
        const index= userCartList.findIndex((element)=>element === cartItem)
        userCartList[index].quantity=quantity
        console.log(userCartList)
    }

    const context:CartContextType = {
        cartList: userCartList,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler,
        totalPrice : totalPriceHandler,
        updateQuantity: updateQuantityHandler
    }
    return (<CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>)
    })
export default CartContext;



//
// export const CartContextProvider:React.FC=((props)=>{
//     const userCartList:CartItemType[]=[]
//     // const [userCartList , setUserCartList] = useState<CartItemType[]>([]);
//     function addToCartHandler(product:CartItemType) {
//         userCartList.push(product);
//         //setUserCartList(userCartList)
//         // setUserCartList((prevUserCartList) =>{
//         //    return prevUserCartList.concat(product)
//         // })
//         console.log(userCartList,'list from add to cart handler')
//     }
//     function removeFromCartHandler(cartItem :CartItemType) {
//         //const index = userCartList.findIndex((element) =>element === cartItem);
//         console.log(cartItem,'cartItem from remove handler')
//         //userCartList.splice(index,1)
//         //setUserCartList(userCartList)
//         // setUserCartList((prevUserCartList) =>{
//         // prevUserCartList.splice(index,1);
//         //return prevUserCartList.filter((product) => cartItem.name !== product.name);
//         // })
//         //(userFavourites) => {
//         //       return userFavourites.filter((favourite) => favourite.id !== meetupId);
//         //     });
//         //userCartList.splice(index , 1)
//         userCartList.filter((product) => cartItem.name !== product.name);
//         console.log(userCartList,'list after spice')
//     }