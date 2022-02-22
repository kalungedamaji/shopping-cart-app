import React from "react";
import { ProductDetail } from "../product/Product";
import Cart from "./Cart";

interface CartListProps {
  products: ProductDetail[];
}

const CartList: React.FC<CartListProps> = ({ products }) => {
  products.forEach((product) => {
    console.log("In cartlist:", product);
  });

  let content;

  if (products.length === 0) {
    return <p>Your Cart is Empty !!</p>;
  }

  return (
    <div>
      <h1>Your Shopping Cart</h1>

      {products.map((productDetail: ProductDetail) => (
        <Cart
          productDetail={{
            name: productDetail.name,
            image: productDetail.image,
            description: productDetail.description,
            price: productDetail.price,
          }}
          key={productDetail.name}
        />
      ))}
    </div>
  );
};

export default CartList;
