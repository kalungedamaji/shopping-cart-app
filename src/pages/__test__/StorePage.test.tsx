import React from 'react';
import {fireEvent, render, screen, within} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import App from "../../App";

test('should render product list and return number of products in it on clicking store button', ()=>{

    const inputAppName="Manyavar Shop";
    render(<BrowserRouter>
        <App appName={inputAppName}/>
    </BrowserRouter>);
    const linkButton = screen.getByText(/store button/);
    fireEvent.click(linkButton)

    const cartPageContent = screen.getByRole('list')
    const{ getAllByRole} = within(cartPageContent)
    const items = getAllByRole("listitem")

    expect(items.length).toBe(2);
});
