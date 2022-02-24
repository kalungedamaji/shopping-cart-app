import { createContext } from "react";
import { ProductDetail } from "../components/product-store/Product";
interface CartContextProps {
  cartProductList: ProductDetail[];
  addItemsinCart: (product: ProductDetail) => void;
}
const CartContext = createContext<CartContextProps>({
  cartProductList: [],
  addItemsinCart: (product: ProductDetail) => {},
});
export const CartContextProvider: React.FC = (props) => {
  const inCart: ProductDetail[] = [];
  function addItemsHandler(product: ProductDetail) {
    inCart.push(product);
  }
  const context: CartContextProps = {
    cartProductList: inCart,
    addItemsinCart: addItemsHandler,
  };
  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
