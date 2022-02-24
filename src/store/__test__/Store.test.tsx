import React from 'react';
import {fireEvent, render, screen, within} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import App from "../../App";
import StorePage from "../StorePage";
import productList from "../../product/ProductList";
import ProductList from "../../product/ProductList";

test('should render product list on clicking store button', ()=>{

    const inputAppName="Manyvar Shop";
    render(<BrowserRouter>
        <App appName={inputAppName}/>
    </BrowserRouter>);
    const linkButton = screen.getByText(/store button/);
    fireEvent.click(linkButton)

    const cartPageContent = screen.getByRole('list')
    const{ getAllByRole} = within(cartPageContent)
    const items = getAllByRole("listitem")
    //const children =items.map(item=>(item.children.item(0)?.children.item(1)))
    //console.log(children);
    expect(items.length).toBe(2);
});
//
// test('should renders store page on clicking store buttom', () => {
//     const inputAppName="Manyvar Shop";
//     render(<BrowserRouter>
//         <App appName={inputAppName}/>
//     </BrowserRouter>);
//
//     const linkButton = screen.getByText(/store button/);
//     fireEvent.click(linkButton)
//
//     const cartPageContent = screen.getAllByText("Add to Cart");
//     expect(cartPageContent.length).toBe(2);
// });