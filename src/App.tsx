import React from 'react';

interface AppProps{
  appName:string
}

const  App:React.FC<AppProps> = ({appName})=> {
  return (
    <div>
     <h1>{appName}</h1>
    </div>
    
  );
}

export default App;
