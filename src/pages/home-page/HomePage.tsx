import React from 'react';
import Header from '../../components/main-header/Header';
import ProductStore from '../../components/product-store/ProductStore';



const  HomePage:React.FC = ()=> {

    const inputProduct1= { image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgn8CbKIbjF4VRkw3CbngfisZKCbfHtpVFEw&usqp=CAU "
        , name : "Laptop bag",description : "Your perfect pack for everday use and walks in the forest", price : 4000 }
    const inputProduct2= { image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU " ,
        name : "Mens Casual T-shirt",description : "A classic check shirt in Navy Can be worn for from office to after meeting evening get together.", price : 2200 }
        const inputProduct3= { image : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg "
        , name : "sunset",description : "Your perfect pack for everday use and walks in the forest", price : 4000 }
    const inputProduct4= { image :"https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q= " ,
        name : "forest",description : "A classic check shirt in Navy Can be worn for from office to after meeting evening get together.", price : 2200 }
        const inputProduct5= { image : "https://static.toiimg.com/photo/msid-24476893,width-96,height-65.cms "
        , name : "golden temple",description : "Your perfect pack for everday use and walks in the forest", price : 4000 }

    
        const productCollection = [inputProduct1 , inputProduct2, inputProduct3, inputProduct4, inputProduct5]



    return (
        <div>
            <Header homePageName="Team 1 Mega Mart"/>      
            <ProductStore homePageProducts={productCollection}/>  
        </div>
    );

    
}
export default HomePage;