import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import App from "../../App";
import React from "react";

test('renders Cart navigator', () => {
    const inputAppName="Manyvar Shop";
    render(<BrowserRouter>
        <App appName={inputAppName}/>
    </BrowserRouter>);

    expect(screen.getByRole('link' , { name: 'Cart button' })).toHaveAttribute('href', '/CartPage');
});

test('renders Store navigator', () => {
    const inputAppName="Manyvar Shop";
    render(<BrowserRouter>
        <App appName={inputAppName}/>
    </BrowserRouter>);

    expect(screen.getByRole('link' , { name: 'store button' })).toHaveAttribute('href', '/');
});

test('should renders cart page on clicking Cart buttom', () => {
    const inputAppName="Manyvar Shop";
    render(<BrowserRouter>
        <App appName={inputAppName}/>
    </BrowserRouter>);

    const linkButton = screen.getByText(/Cart button/);
    fireEvent.click(linkButton)

    const cartPageContent = screen.getByText(/Shopping cart/)
    expect(cartPageContent).toBeInTheDocument();
});
