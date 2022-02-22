import React from "react";
import Product, { ProductDetails } from './Product';

interface ProductListProps{
    products: ProductDetails[]
}
const ProductList:React.FC<ProductListProps> = ({products})=> {
    return (<div>
            <ul>
            {products.map((product: ProductDetails) => (
                <Product productDetail={product} key={product.name}/>
            ))}
            </ul>
        </div>
    );
}
export default ProductList;