import React from 'react';
import {OrderItem} from "../Order";
import {OrderItemWrapper} from "./OrdersOrderItem.style";
import {OrderWrapper} from "../Order.style";

export interface OrderItemProps{
    orderItems: OrderItem[];
}


const OrdersOrderItem: React.FC<OrderItemProps> = ({orderItems})=>{

    return(<OrderWrapper>
<OrderItemWrapper>
        <div>
            {orderItems.map((orderItem:OrderItem)=>(
                <div className="RowFlex">

                    <div>
                    <img src={orderItem.image} alt="img"/>
                    </div>

                    <div className="ColumnFlex">
                    <div>Item Name: {orderItem.name}</div>
                    <div>Quantity: {orderItem.quantity}</div>
                    <div>Price: {orderItem.price}</div>
                    </div>

                </div>
            ))}
        </div>
</OrderItemWrapper>
        </OrderWrapper>
    )
}
export default OrdersOrderItem;