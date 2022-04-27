import { Grid } from "@material-ui/core";
import { AxiosResponse } from "axios";
import React from "react";
import Product, { ProductDetail } from './Product';

interface ProductListProps{
    homePageProducts:ProductDetail[] //Promise<AxiosResponse<ProductDetail[], any>>
}
const ProductList:React.FC<ProductListProps> = ({homePageProducts})=> {

    console.log("In product List: ", {homePageProducts});


    return (
    <Grid container spacing={4}>
            {homePageProducts.map((product: ProductDetail) => (
               <Grid item key={product.name} xs={12} sm={6} md={4} lg={3}>
               <Product productDetail={product} key={product.name} />
               </Grid>
            ))}
    </Grid>
    );
}
export default ProductList;