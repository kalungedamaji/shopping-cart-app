import React from "react";
import Product, { ProductDetail } from './Product';

interface ProductListProps{
    homePageProducts: ProductDetail[]
}
const ProductList:React.FC<ProductListProps> = ({homePageProducts})=> {

    console.log("In product List: ", {homePageProducts});


    return (<div>
            {homePageProducts.map((product: ProductDetail) => (
                <Product productDetail={product} key={product.name} />
            ))}
        </div>
    );
}
export default ProductList;