import React, { useContext, useState } from "react";
import { ProductDetail } from "../product-store/Product";
import CartContext from "../../store/CartContext";


const INITIAL_QUANTITY = 1;

export interface CartProps {
  productDetail: ProductDetail;
}


const Cart: React.FC<CartProps> = ({ productDetail }) => {


  const cartCtx = useContext(CartContext);

    const [quantity, setQuantity] = useState(INITIAL_QUANTITY);



    function incrementHandler() {
        setQuantity(quantity+1);
    }

    function decrementHandler() {
        setQuantity(quantity-1);
    }

    function removeItemHandler() {
      cartCtx.removeItemsFromCart(productDetail);
    }

    return (
      <div>
        <h3>{productDetail.name}</h3>
        <img src={productDetail.image} alt={productDetail.name} />
        <p>Price : {productDetail.price}</p>
        <button onClick={decrementHandler}>-</button>
        <p>Quantity : {quantity}</p>
        <button onClick={incrementHandler}>+</button>
        <p>Total : {productDetail.price * quantity}</p>
        <button onClick={removeItemHandler}>Remove</button>
      </div>
  );
};

export default Cart;
