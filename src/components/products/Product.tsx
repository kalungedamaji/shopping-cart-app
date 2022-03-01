import React, {useContext} from 'react';
import CartContext from "../../context/CartContext";
import cartItem from "../cart/CartItem";

export interface ProductDetails{
    image: string,
    name : string,
    description : string,
    price : number
}
export interface CartItemType{
    name : string,
    price: number,
    image: string ,
    quantity: number
}

interface ProductProps{
    productDetail: ProductDetails
}
const Product:React.FC<ProductProps> = ({productDetail})=> {
    const cartCtx = useContext(CartContext);
    function addToCartHandler() {
        const cartItem = {
            name: productDetail.name,
            price: productDetail.price,
            image: productDetail.image,
            quantity: 1
        }
        cartCtx.addToCart(cartItem);
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

