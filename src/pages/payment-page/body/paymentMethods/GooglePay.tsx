import React from "react";
import {ListItem} from "@mui/material";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
export interface GooglePayPageProps {
    collapseValue: boolean
    navigateFunction: () => void
}

const GooglePayPage:React.FC<GooglePayPageProps> = ({collapseValue,navigateFunction}) => {
    return<div>
        <Collapse in={collapseValue} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItem>
                    <input className="input" placeholder="Enter UPI Id" name="upiId" required/>
                </ListItem>
            <ListItem>
                <button className="submitButton" onClick={navigateFunction}>Pay</button>
            </ListItem>
        </List>
        </Collapse>
    </div>
}

export default GooglePayPage;