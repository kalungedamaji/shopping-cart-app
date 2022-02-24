import React , { useContext } from "react";
import { ProductDetail } from "../product-store/Product";
import CartContext from "../../store/Cart-Context";
import Cart from "./Cart";


const CartList: React.FC = () => {

  const cartCtx = useContext(CartContext);

  console.log("In cart List: ", {cartCtx});

  if (cartCtx.cartProductList.length === 0) {
    return <p>Your Cart is Empty !!</p>;
  }

  return (
    <div>
      <h1>Your Shopping Cart</h1>

      {cartCtx.cartProductList.map((productDetail: ProductDetail) => (
        <Cart productDetail={productDetail} key={productDetail.name} />
      ))}
    </div>
  );
};

export default CartList;
