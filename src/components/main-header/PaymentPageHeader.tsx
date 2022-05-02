import React from 'react'
import { Wrapper } from './HomePageHeader.style';


interface PaymentPageHeaderProps{
    paymentPageName: string
}

const PaymentPageHeader:React.FC<PaymentPageHeaderProps> = ({paymentPageName}) => {

    return (
        <Wrapper>
            <h2>{paymentPageName}</h2>
        </Wrapper>
    )
}

export default PaymentPageHeader;