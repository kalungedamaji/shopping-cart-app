import React from 'react';
import HomePageHeader from '../../components/main-header/HomePageHeader';
import ProductStore from '../../components/product-store/ProductStore';


const  HomePage:React.FC = ()=> {

    const inputProduct1= { image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgn8CbKIbjF4VRkw3CbngfisZKCbfHtpVFEw&usqp=CAU "
        , name : "Laptop bag",description : "Your perfect pack for everday use and walks in the forest", price : 4000 }
    const inputProduct2= { image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU " ,
        name : "Mens Casual T-shirt",description : "A classic check shirt in Navy Can be worn for from office to after meeting evening get together.", price : 2200 }
    const inputProduct3= { image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgn8CbKIbjF4VRkw3CbngfisZKCbfHtpVFEw&usqp=CAU "
        , name : "Laptop bag",description : "Your perfect pack for everday use and walks in the forest", price : 4000 }
    const inputProduct4= { image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU " ,
        name : "Mens Casual T-shirt",description : "A classic check shirt in Navy Can be worn for from office to after meeting evening get together.", price : 2200 }
    const inputProduct5= { image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgn8CbKIbjF4VRkw3CbngfisZKCbfHtpVFEw&usqp=CAU "
        , name : "Laptop bag",description : "Your perfect pack for everday use and walks in the forest", price : 4000 }
    const inputProduct6= { image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU " ,
          name : "Mens Casual T-shirt",description : "A classic check shirt in Navy Can be worn for from office to after meeting evening get together.", price : 2200 }
    const inputProduct7= { image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgn8CbKIbjF4VRkw3CbngfisZKCbfHtpVFEw&usqp=CAU "
          , name : "Laptop bag",description : "Your perfect pack for everday use and walks in the forest", price : 4000 }
    const inputProduct8= { image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU " ,
            name : "Mens Casual T-shirt",description : "A classic check shirt in Navy Can be worn for from office to after meeting evening get together.", price : 2200 }    
        
    const productCollection = [inputProduct1 , inputProduct2, inputProduct3, inputProduct4, inputProduct5, inputProduct6, inputProduct7, inputProduct8]

    return (
        <div>
            <HomePageHeader homePageName="Meta Mart"/>      
            <ProductStore homePageProducts={productCollection}/>  
        </div>
    );
    
}
export default HomePage;