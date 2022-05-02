import React, { useContext} from "react";
import CartContext from "../../../store/CartContext";
import { Wrapper } from "./CartPageHeader.style";
import {useNavigate} from "react-router-dom";

interface CartPageProps {
    cartPageName: string
}

const CartPageHeader:React.FC<CartPageProps> = ({cartPageName}) => {

    const cartCtx = useContext(CartContext);
    let navigate = useNavigate();
    const routeChangePaymentPage = () =>{
        let path = '/payment';
        navigate(path);
    }
    return (
        <Wrapper>
            <h2>{cartPageName}</h2>
            <h2>Subtotal: {cartCtx.totalCartPrice()}</h2>
            <button onClick={routeChangePaymentPage}>Proceed To Buy</button>
        </Wrapper>
    )
}

export default CartPageHeader;