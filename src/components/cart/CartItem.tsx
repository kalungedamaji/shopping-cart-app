import React, {useState} from "react";
import { ProductDetail } from "../product-store/Product";

export interface CartProps {
  productDetail: ProductDetail;
}

const Cart: React.FC<CartProps> = ({ productDetail }) => {

    const [quantity, setQuantity] = useState(1);

    function incrementHandler() {
        setQuantity(quantity+1);
    }

    function decrementHandler() {
        setQuantity(quantity-1);
    }

    return (
      <div>
        <h3>{productDetail.name}</h3>
        <img src={productDetail.image} alt={productDetail.name} />
        <p>Price : {productDetail.price}</p>
        <button onClick={decrementHandler}>-</button>
        <p>Quantity : {quantity}</p>
        <button onClick={incrementHandler}>+</button>
        <p>Total : {+productDetail.price * quantity}</p>
      </div>
  );
};

export default Cart;
