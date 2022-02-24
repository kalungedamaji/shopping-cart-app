import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import App from "../../../App";
import React from "react";

test('should renders Cart link from MainNavigation', () => {
    const inputAppName="Manyvar Shop";
    render(<BrowserRouter>
        <App appName={inputAppName}/>
    </BrowserRouter>);

    expect(screen.getByRole('link' , { name: 'Cart' })).toHaveAttribute('href', '/CartPage');
});

test('should renders Store link from MainNavigation', () => {
    const inputAppName="Manyavar Shop";
    render(<BrowserRouter>
        <App appName={inputAppName}/>
    </BrowserRouter>);

    expect(screen.getByRole('link' , { name: 'Store' })).toHaveAttribute('href', '/');
});

