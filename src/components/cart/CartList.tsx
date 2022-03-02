import React, { useContext } from "react";
import CartContext, { CartProductDetail } from "../../store/CartContext";
import Cart from "./CartItem";

interface CartListProps{
  setRenderedCartList: ()=>void
}

const CartList: React.FC<CartListProps> = ({setRenderedCartList}) => {
  const cartCtx = useContext(CartContext);

  if (cartCtx.cartProductList.length === 0) {
    return <h3>Your Cart is Empty !!</h3>;
  }

  return (
    <div>
      {cartCtx.cartProductList.map((cartProductDetail: CartProductDetail) => (
        <Cart cartProductDetail={cartProductDetail} setRenderedCartList={setRenderedCartList} key={cartProductDetail.name} />
      ))}
    </div>
  );
};

export default CartList;
