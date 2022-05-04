import React from 'react'
import {useNavigate} from "react-router-dom";


interface PaymentPageHeaderProps{
    paymentPageName: string
}

const PaymentPageHeader:React.FC<PaymentPageHeaderProps> = ({paymentPageName}) => {

    let navigate = useNavigate();
    const routeChangeCartPage = () =>{
        let path = '/cart';
        navigate(path);
    }
    return (
        <div>
            <h2>{paymentPageName}</h2>
            <button onClick={routeChangeCartPage}>Go To Cart</button>
        </div>    )
}

export default PaymentPageHeader;