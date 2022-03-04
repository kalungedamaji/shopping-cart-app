import React from "react";
import { useNavigate } from "react-router-dom";

interface CartPageProps {
    cartPageName: string;
}

const CartPageHeader:React.FC<CartPageProps> = ({cartPageName}) => {

    let navigate = useNavigate(); 

    const routeChange = () =>{       
      let path = `/`; 
      navigate(path);
    } 

    return ( 
    <div>
        <h1>{cartPageName}</h1>
        <h4>Cart Total Price: 0</h4>
        <button onClick={routeChange}>Home</button>
   </div> 
    )
}

export default CartPageHeader;