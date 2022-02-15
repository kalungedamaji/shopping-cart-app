import React from 'react';

interface AppProps{
  appName:string,
}

const  App:React.FC<AppProps> = ({appName})=> {
  return (
    <div>
     <h1>{appName}</h1>
     <h5 >Laptop Bagpack</h5>
     <h6 > A Blue coloured leather bag with capacity of 15l</h6>
     <h3 >INR.5000</h3>
    </div>
   
  );
}

export default App;
