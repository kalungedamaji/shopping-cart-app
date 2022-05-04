import React, {useEffect, useState} from 'react';
import PaymentPageHeader from "./header/PaymentPageHeader";
import { getCustomer} from "../../components/customer/api/CustomerApi";
import {CustomerDetail} from "../../components/customer/Customer";
import HomePageHeader from "../../components/main-header/HomePageHeader";
import {useNavigate} from "react-router-dom";

const  PaymentPage:React.FC = ()=> {

    const[customer,setCustomer]= useState<CustomerDetail>();

    useEffect(()=>{
        getCustomer("cfd14c2f-b0ae-4ce4-b25c-7859fcc1685b").then((responseData)=>{
            console.log("I am response data",responseData);

            let customerDetail: CustomerDetail = {
                    id : responseData.id,
                    firstName : responseData.firstName,
                    lastName : responseData.lastName,
                    address : responseData.address,
                    phoneNumber : responseData.phoneNumber,
                    emailId : responseData.emailId,
                    password : responseData.password
                }
            setCustomer(customerDetail);
        });

    }, [])

    let navigate = useNavigate();
    const routeChangeOrderPage = () =>{
        let path = '/orders';
        navigate(path);
    }

    return(
    <div>
        <h1>
            <HomePageHeader homePageName="Meta Mart"></HomePageHeader>
        </h1>

        <h2>
            <PaymentPageHeader paymentPageName='Payment Page'/>
        </h2>
        <div>
            <h4>Shipping Address</h4>
            <h4>{customer?.address}</h4>
        </div>
        <button onClick={routeChangeOrderPage}>Pay</button>
    </div>)
        

}
export default PaymentPage;