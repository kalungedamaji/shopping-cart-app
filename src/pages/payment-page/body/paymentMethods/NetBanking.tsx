import React from "react";
import {ListItem} from "@mui/material";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
export interface NetBankingPageProps {
    collapseValue: boolean
    navigateFunction: () => void
}

const NetBankingPage:React.FC<NetBankingPageProps> = ({collapseValue,navigateFunction}) => {
    return<div>
        <Collapse in={collapseValue} timeout="auto" unmountOnExit>
            <List>
                <ListItem>
                    <input className="input" type="text" placeholder="Enter Id" name="uid" required/>
                </ListItem>
                <ListItem>
                    <input className="input" type="password" placeholder="Password" name="upassword" required/>
                </ListItem>
                <ListItem>
                    <button className="submitButton" onClick={navigateFunction}>Pay</button>
                </ListItem>
        </List>
    </Collapse>
    </div>
}

export default NetBankingPage;