import React from 'react'
import {Wrapper} from "./OrdersPageHeader.style";

interface OrdersPageHeaderProps{
    orderPageName: string
}

const PaymentPageHeader:React.FC<OrdersPageHeaderProps> = ({orderPageName}) => {

    return (<Wrapper>
        <div className="Header">
            <h2>{orderPageName}</h2>
        </div>
</Wrapper>
    )
}

export default PaymentPageHeader;