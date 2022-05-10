import React, {useEffect, useState} from 'react';
import HomePageHeader from "../../components/main-header/HomePageHeader";
import OrdersPageHeader from "./header/OrdersPageHeader";
import {AllOrdersServiceResponse, getAllOrders, OrderContent} from "../../components/orders/api/OrderApi";
import {OrderDetail} from "../../components/orders/Order";
import OrderList from "../../components/orders/OrderList";

    const  OrdersPage: React.FC = ()=> {

        const[orderCollection,setOrderCollection]= useState<OrderDetail[]>([]);

        useEffect(()=>{
            getAllOrders("cfd14c2f-b0ae-4ce4-b25c-7859fcc1685b")
            .then((responseData: AllOrdersServiceResponse)=>{
                const orderDetails: OrderDetail[] = responseData.content.map((content: OrderContent)=>{

                    let orderDetail: OrderDetail = {
                        id: content.id,
                        timestamp: content.timestamp,
                        orderPaymentType: content.orderPaymentType,
                        orderPaymentStatus: content.orderPaymentStatus,
                        orderStatus: content.orderStatus,
                        orderItems: content.orderItems
                    }
                    return orderDetail;
                })
                setOrderCollection(orderDetails);
        })
        }, [])

        return(
            <div>
                <div><HomePageHeader homePageName="Meta Mart"/></div>
                <div><OrdersPageHeader orderPageName="My Orders"/></div>
                <div><OrderList allOrders={orderCollection}/></div>
            </div>
        );
    }
    export default OrdersPage;