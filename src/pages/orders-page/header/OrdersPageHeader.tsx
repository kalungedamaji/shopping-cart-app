import React from 'react'

interface OrdersPageHeaderProps{
    orderPageName: string
}

const PaymentPageHeader:React.FC<OrdersPageHeaderProps> = ({orderPageName}) => {

    return (
        <div>
            <h2>{orderPageName}</h2>
        </div>
    )
}

export default PaymentPageHeader;