import { render, screen } from "@testing-library/react"
import PaymentPage from "../PaymentPage"
import {BrowserRouter} from "react-router-dom";

it("should render payment page header", () => {

    render(<BrowserRouter><PaymentPage /></BrowserRouter>)
    const paymentPageHeaderElement=screen.getByText( "Payment Page")
    expect(paymentPageHeaderElement).toBeInTheDocument();
})

it("should display shipping address on payment page", ()=>{
    render(<BrowserRouter><PaymentPage /></BrowserRouter>)
    const addressElement = screen.getByText("Shipping Address")
    expect(addressElement).toBeInTheDocument();
})