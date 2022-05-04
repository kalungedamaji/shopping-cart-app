import React from 'react'
import {screen, render} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import OrdersPageHeader from "../header/OrdersPageHeader";

const inputOrdersPageName = "Your Orders";

const MockOrdersHeader: React.FC = () => {
    return (
        <BrowserRouter>
            <OrdersPageHeader orderPageName={inputOrdersPageName} />
        </BrowserRouter>
    );
};

it("should render orders page header name", () => {
    render(<MockOrdersHeader />)

    const headerNameElement = screen.getByRole("heading", {name: "Your Orders"})

    expect(headerNameElement).toBeInTheDocument();
})
