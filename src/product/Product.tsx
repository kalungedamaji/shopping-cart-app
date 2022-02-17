import React from 'react';

export interface ProductDetails{
    image: string,
    name : string,
    description : string,
    price : string
}
interface ProductProps{
    productDetails: ProductDetails
}
const Product:React.FC<ProductProps> = ({productDetails})=> {

    return (
        <li>
            <div>
                <img src ={productDetails.image} alt={productDetails.name}></img>
                <h3>{productDetails.name}</h3>
                <p>{productDetails.description}</p>
                <h4>{productDetails.price}</h4>
                <button>Add to Cart</button>
            </div>
        </li>
    );

}
export default Product;

