import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(

    <BrowserRouter>
        <App appName="Flipkart for Technogise"/>
    </BrowserRouter>,
    document.getElementById("root"));
