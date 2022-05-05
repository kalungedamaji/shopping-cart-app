import React from 'react';
import PaymentPageHeader from "./header/PaymentPageHeader";
import HomePageHeader from "../../components/main-header/HomePageHeader";
import PaymentPageBody from "./body/PaymentPageBody";

const  PaymentPage:React.FC = ()=> {

    return( <div>
        <HomePageHeader homePageName="Meta Mart"></HomePageHeader>
        <PaymentPageHeader paymentPageName='Payment Page'/>
        <PaymentPageBody />
    </div>
)

}
export default PaymentPage;