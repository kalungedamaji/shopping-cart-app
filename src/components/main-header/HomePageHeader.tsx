import { IconButton } from '@material-ui/core';
import { ShoppingCart} from '@material-ui/icons';
import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { Wrapper } from './HomePageHeader.style';
import {PlaylistAddCheck} from '@material-ui/icons';


interface HomePageProps{
    homePageName:string
}

const Header:React.FC<HomePageProps> = (({homePageName}) => {

    let navigate = useNavigate(); 

    const routeChangeCartPage = () =>{
      let path = `/cart`; 
      navigate(path);
    } 

    const routeChangeHomePage = () =>{
        let path = `/`; 
        navigate(path);
      } 

    const routeChangeOrdersPage = () =>{
        let path = `/orders`;
        navigate(path);
    }

    return (
        <Wrapper>
            <h1 onClick={routeChangeHomePage}>{homePageName}</h1>
            <IconButton onClick={routeChangeCartPage} color="inherit" aria-label="View Cart">
            <ShoppingCart fontSize='large'/>
            </IconButton>
            <IconButton onClick={routeChangeOrdersPage} color="inherit" aria-label="View Orders">
                <PlaylistAddCheck fontSize='large'/>
            </IconButton>
        </Wrapper>
    )
})

export default Header;