import { createContext } from "react";
import { getAllCartItems, AllCartItemsServiceResponse, CartItemsContent, createCartItem, CartItemServiceResponse } from "../components/cart/api/CartApi";
import { ProductDetail } from "../components/product-store/Product";


export interface CartProductDetail{
  id: string,
  image: string,
  name : string,
  price: number,
  quantity: number,
}

export interface CartProductProps{
  cartProductDetail: CartProductDetail
}

export interface CartContextType {
  setCartProductList: (cartItemList: CartProductDetail[]) => void,
  cartProductList: CartProductDetail[],
  totalCartPrice: () => number,
  addItemsInCart: (cartProduct: CartProductDetail) => void,
  removeItemsFromCart: (product: CartProductDetail) => void
}

const CartContext = createContext<CartContextType>({
  setCartProductList: (cartItemList: CartProductDetail[]) => {},
  cartProductList: [],
  totalCartPrice: () => {return 0},
  addItemsInCart: (cartProduct: CartProductDetail) => {},
  removeItemsFromCart: (product: CartProductDetail) => {}
});

export const CartContextProvider : React.FC = (props) => {

  const inCart: CartProductDetail[] = [];
 
  function setCartProductListHandler(cartItemList: CartProductDetail[]){
    console.log("incart before", inCart);
    cartItemList.forEach(cartItem =>{
      inCart.push(cartItem);
    })
    console.log("incart after", inCart);
  }
  function cartTotalPriceHandler() {
    let price = 0;
    inCart.map((cartProduct : CartProductDetail)=>{
        price = price + (cartProduct.quantity * cartProduct.price)
    })
    return price;
  }

  function addItemsHandler(cartProduct: CartProductDetail) {
    inCart.push(cartProduct);
  }

  function removeItemHandler(product: CartProductDetail) {
    inCart.forEach((cartItem, index) => {
      if(cartItem.name === product.name) 
         { 
           inCart.splice(index, 1);
         }
    })
  }
  getAllCartItems().then((responseData: AllCartItemsServiceResponse)=>{
    console.log(responseData);  
    const cartItemDetails: CartProductDetail[] = responseData.content.map((content: CartItemsContent)=>{
        let cartItemDetail: CartProductDetail = {
            id : content.id,
            name : content.name,
            image : content.image,
            price : content.price,
            quantity : content.quantity 
          }
          return cartItemDetail;
    })
      setCartProductListHandler(cartItemDetails);
  });
  
const context: CartContextType = {
    setCartProductList: setCartProductListHandler,
    cartProductList: inCart,
    totalCartPrice: cartTotalPriceHandler,
    addItemsInCart: addItemsHandler,
    removeItemsFromCart: removeItemHandler
  };


  return (
    <CartContext.Provider value={context}>
     {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
