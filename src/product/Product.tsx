import React from 'react'

export interface ProductDetail{
    image: string,
    name : string,
    description : string,
    price : number
}
export interface ProductProps{
    productDetail: ProductDetail
    cartList:ProductDetail[]
}


const Product:React.FC<ProductProps> = ({productDetail , cartList})=> {
    console.log("In Product Component:", cartList);

 function itemAddHandler() {
    cartList.push(productDetail)
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

