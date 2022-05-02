import React from 'react'
import { Wrapper } from '../../../components/main-header/HomePageHeader.style';
import {Button} from "@material-ui/core";


interface PaymentPageHeaderProps{
    paymentPageName: string
}

const PaymentPageHeader:React.FC<PaymentPageHeaderProps> = ({paymentPageName}) => {

    return (
        <Wrapper>
            <h2>{paymentPageName}</h2>
            <Button>Go To Cart</Button>
        </Wrapper>
    )
}

export default PaymentPageHeader;