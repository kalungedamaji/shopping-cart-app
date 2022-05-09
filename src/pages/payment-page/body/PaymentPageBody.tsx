import * as React from "react";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
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
interface PaymentMethods{
    card: boolean;
    gpay: boolean;
    netBanking: boolean;
}
const  PaymentPageBody:React.FC = ()=> {
    const [modes, setMode] = React.useState<PaymentMethods>({card: false, gpay: false, netBanking: false});
    const[customer,setCustomer]= useState<CustomerDetail>();
    let selectedPaymentMethod: PlaceOrderDetails =getPaymentType();

    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        if(event.target.value=== "debitCard"){
            setMode({card: true, gpay: false, netBanking: false})
        }
        else if(event.target.value=== "googlePay"){
             setMode({card: false, gpay: true, netBanking: false})
        }
        else if(event.target.value=== "netBanking"){
            setMode({card: false, gpay: false, netBanking: true})
        }
    };

    function getPaymentType() :PlaceOrderDetails{
        let selectedPaymentType : PlaceOrderDetails = {paymentType: "null"}
        if(modes.gpay){
                    selectedPaymentType = {paymentType: "UPI"}
        }
        if(modes.card){
            selectedPaymentType = {paymentType: "DEBIT_CARD"}
        }
        if(modes.netBanking){
            selectedPaymentType = {paymentType: "NET_BANKING"}
        }
        return selectedPaymentType
    }
    useEffect(()=>{
        getCustomer("7ccd09e3-ec5d-41c8-9f4f-713619453c78").then((responseData)=>{
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
        <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
        >
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"><b>Payment Methods</b></FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                >
                    <ListItem>
                        <FormControlLabel value="debitCard" control={<Radio value="debitCard" onChange={handleClick}/>} label="DebitCard" />
                    </ListItem>
                    <Collapse in={modes.card} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem>
                                <input className="input" type="text" placeholder="Enter Card Number" name="cardNumber" required/><ListItem>
                            </ListItem>
                            </ListItem>
                            <ListItem>

                            <input className="input" placeholder="Year" name="year" required/>
                                <select className="dropdown" name="month" id="month">
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>

                                </select>
                            </ListItem>
                            <ListItem>
                                <input className="input" type="number" placeholder="CVV" name="ucvv" required/>
                            </ListItem>
                            <ListItem>
                                <button className="submitButton" onClick={routeChangeOrderPage}>Pay</button>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem>
                        <FormControlLabel value="googlePay" control={<Radio value="googlePay" onChange={handleClick} />} label="Google Pay" />
                    </ListItem>
                    <Collapse in={modes.gpay} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem>
                                <input className="input" placeholder="Enter UPI Id" name="upiId" required/>
                            </ListItem>
                            <ListItem>
                                <button className="submitButton" onClick={routeChangeOrderPage}>Pay</button>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem>
                        <FormControlLabel value="netBanking" control={<Radio value="netBanking" onChange={handleClick} />} label="Net Banking" />
                    </ListItem>
                    <Collapse in={modes.netBanking} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem>
                                <input className="input" type="text" placeholder="Enter Id" name="uid" required/>
                            </ListItem>
                            <ListItem>
                                <input className="input" type="password" placeholder="Password" name="upassword" required/>
                            </ListItem>
                            <ListItem>
                                <button className="submitButton" onClick={routeChangeOrderPage}>Pay</button>
                            </ListItem>
                        </List>
                    </Collapse>
                </RadioGroup>
            </FormControl>
        </List>
        </div>
    </PaymentBodyWrapper>
    </div>
   }

export default PaymentPageBody;