import { IconButton, Typography } from '@material-ui/core';
import { AddShoppingCart, Home } from '@material-ui/icons';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
            <IconButton onClick={routeChangeCart} color="inherit" aria-label="add to shopping cart">
            <AddShoppingCart fontSize='large'/>
            </IconButton> 
        </Wrapper>
    )
})

export default Header