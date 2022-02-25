import React, { useContext } from "react";
import { ProductDetail } from "../product-store/Product";
import CartContext from "../../store/Cart-Context";
import Cart from "./Cart";

const CartList: React.FC = () => {
  const cartCtx = useContext(CartContext);

  if (cartCtx.cartProductList.length === 0) {
    return <h3>Your Cart is Empty !!</h3>;
  }

  return (
    <div>
      {cartCtx.cartProductList.map((productDetail: ProductDetail) => (
        <Cart productDetail={productDetail} key={productDetail.name} />
      ))}
    </div>
  );
};

export default CartList;
