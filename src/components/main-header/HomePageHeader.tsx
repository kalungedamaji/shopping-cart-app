import { IconButton } from '@material-ui/core';
import { AddShoppingCart} from '@material-ui/icons';
import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { Wrapper } from './HomePageHeader.style';


interface HomePageProps{
    homePageName:string
}

const Header:React.FC<HomePageProps> = (({homePageName}) => {

    let navigate = useNavigate(); 

    const routeChangeCart = () =>{       
      let path = `/cart`; 
      navigate(path);
    } 

    const routeChangeHome = () =>{       
        let path = `/`; 
        navigate(path);
      } 


    return (
        <Wrapper>
            <h1 onClick={routeChangeHome}>{homePageName}</h1>
            <IconButton onClick={routeChangeCart} color="inherit" aria-label="View Cart">
            <AddShoppingCart fontSize='large'/>
            </IconButton> 
        </Wrapper>
    )
})

export default Header;