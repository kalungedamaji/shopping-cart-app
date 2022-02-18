import React from 'react'
import Product, { ProductDetails, ProductProps } from '../product/Product'

interface CartProps {
    product: ProductDetails
}

const ShopCart:React.FC<CartProps> = ({product}) => {

    return (

        <div>
            { <Product productDetail={product} />}
        </div>
    )

}

export default ShopCart;