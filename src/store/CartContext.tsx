import { createContext } from "react";
import { ProductDetail } from "../components/product-store/Product";

export interface CartProductDetail{
  image: string,
  name : string,
  price : number,
  quantity: number
}

export interface CartProductProps{
  cartProductDetail: CartProductDetail
}

interface CartContextType {
  cartProductList: CartProductDetail[];
  addItemsInCart: (product: ProductDetail) => void;
  removeItemsFromCart: (product: CartProductDetail) => void;
}

const CartContext = createContext<CartContextType>({
  cartProductList: [],
  addItemsInCart: (product: ProductDetail) => {},
  removeItemsFromCart: (product: CartProductDetail) => {}
});

export const CartContextProvider : React.FC = (props) => {

  const inCart: CartProductDetail[] = [];


  function addItemsHandler(product: ProductDetail) {
    let cartProduct: CartProductDetail = {
      name : product.name,
      image : product.image,
      price : product.price,
      quantity : 1
    }

    inCart.push(cartProduct);
  }

  function removeItemHandler(product: CartProductDetail) {
    inCart.forEach((cartItem, index) => {
      if(cartItem.name === product.name) 
         inCart.splice(index, 1);
    })
  }

const context: CartContextType = {
    cartProductList: inCart,
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
