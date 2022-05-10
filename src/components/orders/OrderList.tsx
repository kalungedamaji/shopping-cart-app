import React from "react";
import Order, {OrderDetail} from "./Order";
import {Grid} from "@material-ui/core";

interface OrderProps{
    allOrders: OrderDetail[]
}
const OrderList:React.FC<OrderProps> = ({allOrders})=> {

    return (

        <Grid container spacing={4} direction="row">
            {allOrders.map((orderItem: OrderDetail) => (
                <Grid item key={orderItem.id} xs={12} sm={8} md={8} lg={8}>
                    <Order orderDetail={orderItem} />
                </Grid>
            ))}
        </Grid>
    );
}
export default OrderList;