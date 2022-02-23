import React from 'react'
import { useContext } from 'react';
import CartContext from '../store/Cart-Context'

export interface ProductDetail{
    image: string,
    name : string,
    description : string,
    price : number
}
export interface ProductProps{
    productDetail: ProductDetail
}


const Product:React.FC<ProductProps> = ({productDetail})=> {

    const cartCtx = useContext(CartContext);

    console.log("In product: ", {productDetail})

 function itemAddHandler() {
    cartCtx.addItemsinCart(productDetail);
 }

    return (
        <li>
            <div>
                <img src ={productDetail.image} alt={productDetail.name}></img>
                <h3>{productDetail.name}</h3>
                <p>{productDetail.description}</p>
                <h4>INR {productDetail.price}</h4>
                <button onClick={itemAddHandler} >Add to Cart</button>
            </div>
        </li>
    ); 

}

export default Product;


