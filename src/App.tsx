import React from 'react';

interface AppProps{
  appName:string,
}

const  App:React.FC<AppProps> = ({appName})=> {
  return (
    <div>
     <h1>{appName}</h1>
     <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
     <h5 >Laptop Bagpack</h5>
     <h6 > A Blue coloured leather bag with capacity of 15l</h6>
     <h3 >INR.5000</h3>
    </div>
   
  );
}

export default App;
