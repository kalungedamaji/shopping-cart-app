import React, { useContext, useState } from "react";
import CartContext, { CartProductDetail} from "../../store/CartContext";

export interface CartProps {
  cartProductDetail: CartProductDetail;
  setRenderedCartList: ()=>void
}

const INITIAL_QUANTITY = 1;

const Cart: React.FC<CartProps> = ({ cartProductDetail, setRenderedCartList }) => {

  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(INITIAL_QUANTITY);

    function incrementHandler() {
        setQuantity(quantity+1);
        cartProductDetail.quantity = quantity;
    }

    function decrementHandler() {
        setQuantity(quantity-1);
        cartProductDetail.quantity = quantity;
    }

    function removeItemHandler() {
      cartCtx.removeItemsFromCart(cartProductDetail);
      setRenderedCartList();
    }


    return (
      <div>
        <h3>{cartProductDetail.name}</h3>
        <img src={cartProductDetail.image} alt={cartProductDetail.name} />
        <p>Price : {cartProductDetail.price}</p>
        <button onClick={decrementHandler}>-</button>
        <p>Quantity : {cartProductDetail.quantity}</p>
        <button onClick={incrementHandler}>+</button>
        <p>Total : {cartProductDetail.price * cartProductDetail.quantity}</p>
        <button onClick={removeItemHandler}>Remove</button>
      </div>
  );
};

export default Cart;



