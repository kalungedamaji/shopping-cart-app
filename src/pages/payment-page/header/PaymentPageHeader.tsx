import React from 'react'

interface PaymentPageHeaderProps{
    paymentPageName: string
}

const PaymentPageHeader:React.FC<PaymentPageHeaderProps> = ({paymentPageName}) => {

    return (
        <div>
            <h2>{paymentPageName}</h2>
        </div>
    )
}

export default PaymentPageHeader;