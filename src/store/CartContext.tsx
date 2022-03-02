import { createContext } from "react";
import { createVariableStatement } from "typescript";
import { ProductDetail } from "../components/product-store/Product";

interface CartContextType {
  cartProductList: ProductDetail[];
  addItemsInCart: (product: ProductDetail) => void;
  removeItemsFromCart: (product: ProductDetail) => void;
}

const CartContext = createContext<CartContextType>({
  cartProductList: [],
  addItemsInCart: (product: ProductDetail) => {},
  removeItemsFromCart: (product: ProductDetail) => {}
});

export const CartContextProvider: React.FC = (props) => {
  const inCart: ProductDetail[] = [];

  function addItemsHandler(product: ProductDetail) {
    inCart.push(product);
  }

  function removeItemHandler(product: ProductDetail) {
  

    inCart.forEach((cartItem, index) => {
      if(cartItem.name === product.name) 
         inCart.splice(index, 1);
    })

   
    console.log("Item removed", inCart);

    // const requiredItem = (product1: ProductDetail) => product1.name === product.name}
    // const productIndex = inCart.findIndex();


    
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
