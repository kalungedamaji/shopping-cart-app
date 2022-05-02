import React from 'react';
import PaymentPageHeader from "./header/PaymentPageHeader";

const  PaymentPage:React.FC = ()=> {

    return(
    <div>
        <h1>
            <PaymentPageHeader paymentPageName='Payment Page'/>
        </h1>
    </div>)
        

}
export default PaymentPage;