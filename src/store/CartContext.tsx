import { createContext } from "react";
import {
    getAllCartItems,
    AllCartItemsServiceResponse,
    CartItemContent
} from "../components/cart/api/CartApi";

export interface CartProductDetail{
  customerId: string,
  id: string,
  image: string,
  name : string,
  price: number,
  quantity: number,
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
  getAllCartItems("cfd14c2f-b0ae-4ce4-b25c-7859fcc1685b").then((responseData: AllCartItemsServiceResponse)=>{
    console.log(responseData);  
    const cartItemDetails: CartProductDetail[] = responseData.content.map((content: CartItemContent)=>{
        let cartItemDetail: CartProductDetail = {
            customerId : "b5569a58-1324-49b8-8f23-9014def23817",
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
