import { createContext } from "react";
import { ProductDetail } from "../components/product-store/Product";

interface CartContextType {
  cartProductList: ProductDetail[];
  addItemsInCart: (product: ProductDetail) => void;
}

const CartContext = createContext<CartContextType>({
  cartProductList: [],
  addItemsInCart: (product: ProductDetail) => {},
});

export const CartContextProvider: React.FC = (props) => {
  const inCart: ProductDetail[] = [];
  function addItemsHandler(product: ProductDetail) {
    inCart.push(product);
  }

const context: CartContextType = {
    cartProductList: inCart,
    addItemsInCart: addItemsHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
