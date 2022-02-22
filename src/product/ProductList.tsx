import React from "react";
import Product, { ProductDetail } from './Product';

interface ProductListProps{
    products: ProductDetail[]
    cartList:ProductDetail[]
}
const ProductList:React.FC<ProductListProps> = ({products, cartList})=> {

    console.log("In ProductList", cartList);
    return (<div>
            {products.map((product: ProductDetail) => (
                <Product productDetail={product} key={product.name} cartList={cartList}/>
            ))}
        </div>
    );
}
export default ProductList;