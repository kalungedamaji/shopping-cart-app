import React, { useContext} from "react";
import CartContext from "../../../store/CartContext";
import { Wrapper } from "./CartPageHeader.style";

interface CartPageProps {
    cartPageName: string
}

const CartPageHeader:React.FC<CartPageProps> = ({cartPageName}) => {

    const cartCtx = useContext(CartContext);
    
    return ( 
    <Wrapper>
        <h2>{cartPageName}</h2>
        <h2>Subtotal: {cartCtx.totalCartPrice()}</h2>
    </Wrapper>
    )
}

export default CartPageHeader;