import React from "react";
import { ProductDetail } from "../product/Product";

export interface CartProps {
  productDetail: ProductDetail;
}

const Cart: React.FC<CartProps> = ({ productDetail }) => {

  console.log("In Cart: ", {productDetail})

  const quantity = 1;

  return (
    <li>
      <div>
        <img src={productDetail.image} alt={productDetail.name} />
        <p>Price : {productDetail.price}</p>
        <button>-</button>
        <p>Quantity : {quantity}</p>
        <button>+</button>
        <p>Total : {+productDetail.price * quantity}</p>
      </div>
    </li>
  );
};

export default Cart;
