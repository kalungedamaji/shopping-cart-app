import {render, screen, waitFor} from "@testing-library/react"
import PaymentPage from "../PaymentPage"
import {BrowserRouter} from "react-router-dom";
import React from "react";

describe("tests for payment page ",()=>{
it("should render payment page header", () => {

    render(<BrowserRouter><PaymentPage /></BrowserRouter>)
    const paymentPageHeaderElement=screen.getByText( "Payment Page")
    expect(paymentPageHeaderElement).toBeInTheDocument();
})

it("should display 'shipping address' title on payment page", ()=>{
    render(<BrowserRouter><PaymentPage /></BrowserRouter>)
    const addressElement = screen.getByText("Shipping Address")
    expect(addressElement).toBeInTheDocument();
})

it("should display shipping address on payment page", async ()=>{
    render(<BrowserRouter><PaymentPage /></BrowserRouter>)
    await waitFor(() => {
        expect(screen.getByText("Indore"))
            .toBeInTheDocument();
    })
})

it("should display 'pay' button on payment page",()=>{
    render(<BrowserRouter><PaymentPage /></BrowserRouter>)
    const payButtonElement = screen.getByRole("button",{name:"Pay"})
    expect(payButtonElement).toBeInTheDocument();
})

})