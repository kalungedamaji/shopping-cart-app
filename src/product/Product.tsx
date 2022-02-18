import React, {useState} from 'react';

export interface ProductDetail{
    image: string,
    name : string,
    description : string,
    price : string
}
export interface ProductProps{
    productDetail: ProductDetail
}
const Product:React.FC<ProductProps> = ({productDetail})=> {

    return (
        <li>
            <div>
                <img src ={productDetail.image} alt={productDetail.name}></img>
                <h3>{productDetail.name}</h3>
                <p>{productDetail.description}</p>
                <h4>{productDetail.price}</h4>
                <button >Add to Cart</button>
            </div>
        </li>
    ); 

}

export default Product;

