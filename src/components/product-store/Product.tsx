import React from "react";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import { ProductWrapper } from "./ProductCard.style";

export interface ProductDetail {
  id: string
  image: string;
  name: string;
  description: string;
  price: number;
}
export interface ProductProps {
  productDetail: ProductDetail;
}

const Product: React.FC<ProductProps> = ({ productDetail }) => {
  const cartCtx = useContext(CartContext);
  console.log("In product: ", { productDetail });

  function itemAddHandler() {
    cartCtx.addItemsInCart(productDetail);
  }

  return (
    <ProductWrapper>
    <div className="Card">
        <div className="image"> 
            <img src={productDetail.image} alt={productDetail.name}></img>          
        </div>
        <div className="Flex">
            <h3>{productDetail.name}</h3>
            <h4>INR {productDetail.price}</h4>
        </div> 
            <p>{productDetail.description}</p>
            <button onClick={itemAddHandler}>Add to Cart</button>
    </div>
    </ProductWrapper>
  );
};

export default Product;
