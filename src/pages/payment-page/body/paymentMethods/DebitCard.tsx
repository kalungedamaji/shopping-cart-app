import React from "react";
import {ListItem} from "@mui/material";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";

export interface DebitCardPageProps {
    collapseValue: boolean
    navigateFunction: () => void
}

const DebitCardPage:React.FC<DebitCardPageProps> = ({collapseValue,navigateFunction}) => {
    return<div>
        <Collapse in={collapseValue} timeout="auto" unmountOnExit>
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
                <button className="submitButton" onClick={navigateFunction}>Pay</button>
            </ListItem>
        </List>
        </Collapse>
    </div>
}

export default DebitCardPage;