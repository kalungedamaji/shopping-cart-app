import * as React from "react";
import List from "@mui/material/List";
import { ListItem, Radio, RadioGroup } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { PaymentBodyWrapper } from "./PaymentPageBody.style";
import {useEffect, useState} from "react";
import {CustomerDetail} from "../../../components/customer/Customer";
import {getCustomer} from "../../../components/customer/api/CustomerApi";
import {useNavigate} from "react-router-dom";
import {placeOrder, PlaceOrderDetails} from "../../../components/payment/api/PlaceOrderApi";
import DebitCardPage from "./paymentMethods/DebitCard";
import GooglePayPage from "./paymentMethods/GooglePay";
import NetBankingPage from "./paymentMethods/NetBanking";
interface PaymentMethods{
    card: boolean;
    gpay: boolean;
    netBanking: boolean;
}
const  PaymentPageBody:React.FC = ()=> {
    const [paymentModes, setPaymentMode] = React.useState<PaymentMethods>({card: false, gpay: false, netBanking: false});
    const[customer,setCustomer]= useState<CustomerDetail>();
    let selectedPaymentMethod: PlaceOrderDetails =getPaymentType();

    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        if(event.target.value=== "debitCard"){
            setPaymentMode({card: true, gpay: false, netBanking: false})
        }
        else if(event.target.value=== "googlePay"){
             setPaymentMode({card: false, gpay: true, netBanking: false})
        }
        else if(event.target.value=== "netBanking"){
            setPaymentMode({card: false, gpay: false, netBanking: true})
        }
    };

    function getPaymentType() :PlaceOrderDetails{
        let selectedPaymentType : PlaceOrderDetails = {paymentType: "null"}
        if(paymentModes.gpay){
                    selectedPaymentType = {paymentType: "UPI"}
        }
        if(paymentModes.card){
            selectedPaymentType = {paymentType: "DEBIT_CARD"}
        }
        if(paymentModes.netBanking){
            selectedPaymentType = {paymentType: "NET_BANKING"}
        }
        return selectedPaymentType
    }
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
    function navigateToOrderPage(){
        placeOrder(selectedPaymentMethod,customer?.id);
        let path = '/orders';
        navigate(path);
    }
    return<div>
    <PaymentBodyWrapper>
        <div className="address">
            <h3>Shipping Address</h3>
            <p className="addressField">{customer?.address}</p>
        </div>
        <div className="paymentMethod">
        <List>
            <FormControl>
                <FormLabel><b>Payment Methods</b></FormLabel>
                <RadioGroup>
                    <ListItem>
                        <FormControlLabel control={<Radio value="debitCard" onChange={handleClick}/>} label="DebitCard" />
                    </ListItem>
                    <DebitCardPage collapseValue={paymentModes.card} navigateFunction={navigateToOrderPage}/>
                    <ListItem>
                        <FormControlLabel value="googlePay" control={<Radio value="googlePay" onChange={handleClick} />} label="Google Pay" />
                    </ListItem>
                    <GooglePayPage collapseValue={paymentModes.gpay} navigateFunction={navigateToOrderPage}/>
                    <ListItem>
                        <FormControlLabel value="netBanking" control={<Radio value="netBanking" onChange={handleClick} />} label="Net Banking" />
                    </ListItem>
                    <NetBankingPage collapseValue={paymentModes.netBanking} navigateFunction={navigateToOrderPage}/>
                </RadioGroup>
            </FormControl>
        </List>
        </div>
    </PaymentBodyWrapper>
    </div>
   }

export default PaymentPageBody;