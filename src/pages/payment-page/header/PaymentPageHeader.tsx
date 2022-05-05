import React from 'react'
import {PaymentHeaderWrapper} from "./PaymentPageHeader.style";

interface PaymentPageHeaderProps{
    paymentPageName: string
}

const PaymentPageHeader:React.FC<PaymentPageHeaderProps> = ({paymentPageName}) => {

    return (
        <div>
            <PaymentHeaderWrapper>
            <h2>{paymentPageName}</h2>
            </PaymentHeaderWrapper>
        </div>
    )
}

export default PaymentPageHeader;