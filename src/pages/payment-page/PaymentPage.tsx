import React from 'react';
import PaymentPageHeader from "./header/PaymentPageHeader";

const  PaymentPage:React.FC = ()=> {

    return(
    <div>
        <h1>
            <PaymentPageHeader paymentPageName='Payment Page'/>
        </h1>
        <div>
            <h4>Shipping Address</h4>
        </div>
    </div>)
        

}
export default PaymentPage;