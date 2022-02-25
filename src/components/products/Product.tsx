import React, {useContext} from 'react';
import CartContext from "../../context/CartContext";

export interface ProductDetails{
    image: string,
    name : string,
    description : string,
    price : number
}
interface ProductProps{
    productDetail: ProductDetails
}
const Product:React.FC<ProductProps> = ({productDetail})=> {
    const cartCtx = useContext(CartContext);
    function addToCartHandler() {
        cartCtx.addToCart(productDetail);
    }

    return (
        <li>
            <div>
                <img src ={productDetail.image} alt={productDetail.name}></img>
                <h3>{productDetail.name}</h3>
                <p>{productDetail.description}</p>
                <h4>INR {productDetail.price}</h4>
                <button onClick={addToCartHandler} aria-label={productDetail.name}>Add to Cart</button>
            </div>
        </li>
    );

}
export default Product;

