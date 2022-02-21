import React from 'react';
import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import App from "../../App";
import CartPage from "../CartPage";

test('should renders cart page on clicking Cart buttom', () => {
    const inputAppName="Manyvar Shop";
    render(<BrowserRouter>
        <App appName={inputAppName}/>
    </BrowserRouter>);

    const linkButton = screen.getByText(/Cart button/);
    fireEvent.click(linkButton)

    const cartPageContent = screen.getByText(/Cart page/)
    expect(cartPageContent).toBeInTheDocument();
});


