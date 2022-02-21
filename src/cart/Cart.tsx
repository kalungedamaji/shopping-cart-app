import React from 'react'
import Product, { ProductDetail, ProductProps } from '../product/Product'

interface CartProps {
    quantity: number,
    product: ProductDetail
}

const ShopCart:React.FC<CartProps> = ({product, quantity}) => {

    const totalPrice = +(product.price) * (quantity);
    return (
        <div>
            <h1>Your Shopping Cart</h1>
            <h3>{product.name}</h3>
            <img src ={product.image} alt={product.name}></img>
            <p>Price : {product.price}</p>
            <button>-</button>
            <p>Quantity : {quantity}</p>
            <button>+</button>
            <p>Total : {totalPrice}</p>
        </div>
    )

}

export default ShopCart;
