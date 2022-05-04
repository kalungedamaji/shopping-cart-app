import React from 'react';
import HomePageHeader from "../../components/main-header/HomePageHeader";

    const  OrdersPage:React.FC = ()=> {


        return(
            <div>
                <div><HomePageHeader homePageName="Meta Mart"/></div>
                <h4>Your Orders</h4>
            </div>
        )
    }
    export default OrdersPage;