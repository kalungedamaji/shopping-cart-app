import React from 'react';
import ProductList from './product/ProductList';

interface AppProps{
    appName:string
}

const  App:React.FC<AppProps> = ({appName})=> {
    const inputProduct1= { image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgn8CbKIbjF4VRkw3CbngfisZKCbfHtpVFEw&usqp=CAU "
        , name : "Laptop bag",description : "Your perfect pack for everday use and walks in the forest", price : "INR. 4000" }
    const inputProduct2= { image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU " ,
        name : "Mens Casual T-shirt",description : "A classic check shirt in Navy Can be worn for from office to after meeting evening get together.", price : "INR. 2200" }
    const productCollection = [inputProduct1 , inputProduct2]
    return (
        <div>
            <h1>{appName}</h1>
        </div>
    );
}
export default App;