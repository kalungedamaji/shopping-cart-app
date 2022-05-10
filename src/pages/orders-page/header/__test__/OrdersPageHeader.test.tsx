import React from 'react'
import {screen, render} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import OrdersPageHeader from "../OrdersPageHeader";

const inputOrdersPageName = "My Orders";

const MockOrdersHeader: React.FC = () => {
    return (
        <BrowserRouter>
            <OrdersPageHeader orderPageName={inputOrdersPageName} />
        </BrowserRouter>
    );
};

it("should render orders page header name", () => {
    render(<MockOrdersHeader />)

    const headerNameElement = screen.getByRole("heading", {name: "My Orders"})

    expect(headerNameElement).toBeInTheDocument();
})
