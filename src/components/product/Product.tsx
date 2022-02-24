import React, {useContext} from 'react';
import CartContext from "../../context/CartContext";

export interface ProductDetails{
    image: string,
    name : string,
    description : string,
    price : string
}
interface ProductProps{
    productDetail: ProductDetails
}
const Product:React.FC<ProductProps> = ({productDetail})=> {
    const CartCtx = useContext(CartContext);
    function addToCartHandler() {

        CartCtx.addToCart(productDetail);
        // AddProductToCart(productDetail)
    }

    return (
        <li>
            <div>
                <img src ={productDetail.image} alt={productDetail.name}></img>
                <h3>{productDetail.name}</h3>
                <p>{productDetail.description}</p>
                <h4>{productDetail.price}</h4>
                <button onClick={addToCartHandler} aria-label={productDetail.name}>Add to Cart</button>
            </div>
        </li>
    );

}
export default Product;

