import React from "react";
import Product, { ProductDetail } from './Product';

interface ProductListProps{
    products: ProductDetail[]
}
const ProductList:React.FC<ProductListProps> = ({products})=> {

    console.log("In product List: ", {products});


    return (<div>
            {products.map((product: ProductDetail) => (
                <Product productDetail={product} key={product.name} />
            ))}
        </div>
    );
}
export default ProductList;