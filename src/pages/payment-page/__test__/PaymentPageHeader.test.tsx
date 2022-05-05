import React from 'react'
import {screen, render} from '@testing-library/react'
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






