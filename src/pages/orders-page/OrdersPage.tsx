import React from 'react';
import HomePageHeader from "../../components/main-header/HomePageHeader";
import OrdersPageHeader from "./header/OrdersPageHeader";

    const  OrdersPage:React.FC = ()=> {


        return(
            <div>
                <div><HomePageHeader homePageName="Meta Mart"/></div>
                <div><OrdersPageHeader orderPageName="Your Orders"/></div>
            </div>
        )
    }
    export default OrdersPage;