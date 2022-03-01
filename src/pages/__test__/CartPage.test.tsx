import {fireEvent, getByRole, render, screen, within} from "@testing-library/react";
import React from "react";

import App from "../../App";
import {BrowserRouter} from "react-router-dom";

describe("Cart page tests", () => {
    const MockApp = () => {
        const inputAppName = "Manyavar Shop";
        return (<BrowserRouter>
                  <App appName={inputAppName}/>
               </BrowserRouter>
        )}

    test("should render cart heading when cart button is clicked",()=>{
        render(<MockApp/>)
        const linkButton = screen.getByRole("link", {name: "Cart"});
        fireEvent.click(linkButton)
        const cartHeading = screen.getByRole("heading" , {name: "Your Shopping Cart"})
        expect(cartHeading).toBeInTheDocument();
    })
})
