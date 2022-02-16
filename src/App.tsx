import React from 'react';
import DisplayProduct from './DisplayProduct';

interface AppProps{
  appName:string,
}

const  App:React.FC<AppProps> = ({appName})=> {
  return (
    <div>
     <h1>{appName}</h1>
     <DisplayProduct productName='Laptop Bagpack' producrDescription='A Blue coloured leather bag with capacity of 15l' productPrice='INR.5000'/>
    </div>
   
  );
}

export default App;
