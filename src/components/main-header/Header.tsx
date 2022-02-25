import React from 'react'
import { useNavigate } from 'react-router-dom';

interface HomePageProps{
    homePageName:string
}

const Header:React.FC<HomePageProps> = (({homePageName}) => {

    let navigate = useNavigate(); 

    const routeChange = () =>{       
      let path = `/cart`; 
      navigate(path);
    } 

    return (
        <div>
            <h1>{homePageName}</h1>
            <button onClick={routeChange} > View Cart </button>
        </div>
    )
})

export default Header