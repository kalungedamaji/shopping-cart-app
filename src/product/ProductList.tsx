import React from "react";
import Product, { ProductDetails } from './Product';

interface ProductListProps{
    products: ProductDetails[]
}
const ProductList:React.FC<ProductListProps> = ({products})=> {
    return (<div>
            {products.map((product: ProductDetails) => (
                <Product productDetails={product} key={product.name}/>
            ))}
        </div>
    );
}
export default ProductList;