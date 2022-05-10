import React from "react";
import OrderItem from "./order-item/OrdersOrderItem";
import OrdersOrderItem from "./order-item/OrdersOrderItem";
import {OrderWrapper} from "./Order.style";

export interface OrderItem{
    id: string;
    name: string;
    image: string;
    description: string;
    quantity: number;
    price: number;
}
export interface OrderDetail {
    id: string;
    timestamp: string;
    orderPaymentType: string;
    orderPaymentStatus: string;
    orderStatus: string;
    orderItems: OrderItem[];
}
export interface OrderProps {
    orderDetail: OrderDetail;
}

const Order: React.FC<OrderProps> = ({orderDetail}) => {
    return(<OrderWrapper>
        <div className="Card">
            <div className="OrderHeader">
            <div className="Flex">
            <div>Order ID: {orderDetail.id}</div>
            <div>Order Date: {orderDetail.timestamp}</div>
            </div>
            <div className="Flex">
            <div>Payment Type: {orderDetail.orderPaymentType}</div>
            <div>Payment status: {orderDetail.orderPaymentStatus}</div>
            <div>Order Status: {orderDetail.orderStatus}</div>
            </div>
            </div>
            <div><OrdersOrderItem orderItems={orderDetail.orderItems}/></div>
        </div>
        </OrderWrapper>
    )
}
export default Order;