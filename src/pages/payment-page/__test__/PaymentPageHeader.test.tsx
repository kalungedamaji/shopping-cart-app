import React from 'react'
import {screen, render, fireEvent} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import PaymentPageHeader from '../header/PaymentPageHeader';

const inputPaymentPageName = "Payment Page";

const MockPaymentHeader: React.FC = () => {
    return (
        <BrowserRouter>
            <PaymentPageHeader paymentPageName={inputPaymentPageName} />
        </BrowserRouter>
    );
};

it("should render payment page header name", () => {
    render(<MockPaymentHeader />)

    const headerNameElement = screen.getByRole("heading", {name: "Payment Page"})

    expect(headerNameElement).toBeInTheDocument();
})

it("should render go to cart button",()=>{
    render(<MockPaymentHeader/>)
    const headerButtonElement = screen.getByRole("button",{name: "Go To Cart"})
    expect (headerButtonElement).toBeInTheDocument();
})

it("should navigate to cart page when go to cart button is pressed",()=>{
    render(<MockPaymentHeader/>)
    const goToCartButtonElement = screen.getByRole("button",{name:"Go To Cart"})
    fireEvent.click(goToCartButtonElement);
    const cartPageHeaderName = screen.getByText("Your Shopping Cart")
    expect(cartPageHeaderName).toBeInTheDocument();
});
