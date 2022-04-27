import React, { useEffect, useState } from 'react';
import HomePageHeader from '../../components/main-header/HomePageHeader';
import ProductStore from '../../components/product-store/ProductStore';
import { ProductDetail, ProductProps } from '../../components/product-store/Product';
import { ProductContent, getAllProducts, AllProductsServiceResponse,  } from '../../components/product-store/api/ProductApi';



const  HomePage:React.FC = ()=> {

    console.log("Homepage");

    const[productCollection,setProductCollection]= useState<ProductDetail[]>([]);

    useEffect(()=>{
        getAllProducts().then((responseData: AllProductsServiceResponse)=>{
            console.log(responseData);  
            const productDetails: ProductDetail[] = responseData.content.map((content: ProductContent)=>{
                let productDetail: ProductDetail = {
                    id : content.id,
                    name : content.name,
                    image : content.image,
                    price : content.price,
                    description : content.description 
                  }
                  return productDetail;
            })
            console.log("Products : ",productDetails);
            setProductCollection(productDetails);     
        });   

    }, [])
    
    return (
        <div>
            <HomePageHeader homePageName="Meta Mart"/>      
            <ProductStore homePageProducts={productCollection}/>  
        </div>
    );
    
}
export default HomePage;