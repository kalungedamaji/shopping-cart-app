import React from 'react'
import Product, { ProductDetail, ProductProps } from '../product/Product'

interface CartProps {
    product: ProductDetail
}

const ShopCart:React.FC<CartProps> = ({product}) => {

    return (

        <div>
            { <Product productDetail={product} />}
        </div>
    )

}

export default ShopCart;