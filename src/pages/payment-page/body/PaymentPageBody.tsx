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
interface PaymentMethods{
    card: boolean;
    gpay: boolean;
    netBanking: boolean;
}
const  PaymentPageBody:React.FC = ()=> {
    const [modes, setMode] = React.useState<PaymentMethods>({card: false, gpay: false, netBanking: false});
    const[customer,setCustomer]= useState<CustomerDetail>();

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
        let path = '/orders';
        navigate(path);
    }


    return<div>
    <PaymentBodyWrapper>
        <div className="address"><h3>Shipping Address</h3>
        <h4 className="addressField">{customer?.address}</h4>
        </div>
        <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
        >
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Payment Methods</FormLabel>
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
                                <input className="input" type="number" placeholder="Year" name="year" required/>
                                <select className="dropdown" name="month" id="month">
                                    <option value="volvo">January</option>
                                    <option value="saab">February</option>
                                    <option value="opel">March</option>
                                    <option value="audi">April</option>
                                    <option value="audi">May</option>
                                    <option value="audi">June</option>
                                    <option value="audi">July</option>
                                    <option value="audi">August</option>
                                    <option value="audi">September</option>
                                    <option value="audi">October</option>
                                    <option value="audi">November</option>
                                    <option value="audi">December</option>

                                </select>
                            </ListItem>
                            <ListItem>
                                <input className="input" type="number" placeholder="CVV" name="ucvv" required/>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem>
                        <FormControlLabel value="googlePay" control={<Radio value="googlePay" onChange={handleClick} />} label="Google Pay" />
                    </ListItem>
                    <Collapse in={modes.gpay} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem>
                                <input className="input" type="number" placeholder="Enter UPI Id" name="upiId" required/>
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
                        </List>
                    </Collapse>
                </RadioGroup>
            </FormControl>
        </List>
        <button className="submitButton" onClick={routeChangeOrderPage}>Pay</button>
    </PaymentBodyWrapper>
    </div>
   }

export default PaymentPageBody;