import React from 'react';
import Product from './product/Product';

interface AppProps{
  appName:string,
}

const  App:React.FC<AppProps> = ({appName})=> {
  return (
    <div>
     <h1>{appName}</h1>
     <Product productName='Laptop Bagpack' productDescription='A Blue coloured leather bag with capacity of 15l' productPrice='INR.5000'/>
    </div>
   
  );
}

export default App;
