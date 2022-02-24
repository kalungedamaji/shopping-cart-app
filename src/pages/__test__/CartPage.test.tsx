import {fireEvent, render, screen, within} from "@testing-library/react";
import React from "react";
import {ProductDetails} from "../../components/product/Product";
import App from "../../App";
import {BrowserRouter} from "react-router-dom";

test('should renders cart page on clicking Cart', () => {

    const inputAppName="Manyavar Shop";
    render(<BrowserRouter>
        <App appName={inputAppName}/>
    </BrowserRouter>);
    const linkButton = screen.getByRole("link", {name:"Cart"});
    fireEvent.click(linkButton)
    const cartPageIdentifier = screen.getByText("Shopping cart")
    expect(cartPageIdentifier).toBeInTheDocument();

});

test('should return number of products in cart', () => {

    const inputAppName="Manyavar Shop";
    render(<BrowserRouter>
        <App appName={inputAppName}/>
    </BrowserRouter>);

    const addCartButton = screen.getByLabelText("Laptop bag")
    const addCartButton2 = screen.getByLabelText("Mens Casual T-shirt")
    fireEvent.click(addCartButton)
    fireEvent.click(addCartButton2)

    const linkButton = screen.getByRole("link", {name:"Cart"});
    fireEvent.click(linkButton)
    const cartPageContent = screen.getByRole('list')
    const{ getAllByRole} = within(cartPageContent)
    const items = getAllByRole("listitem")

    expect(items.length).toBe(2);
});
test('should renders product name when product is added and cart button is clicked', () => {

    const inputAppName="Manyavar Shop";
    render(<BrowserRouter>
        <App appName={inputAppName}/>
    </BrowserRouter>);

    const addCartButton = screen.getByLabelText("Laptop bag")
    fireEvent.click(addCartButton)
    const linkButton = screen.getByRole("link", {name:"Cart"});
    fireEvent.click(linkButton)

    const product1Name = screen.getByText("Laptop bag")
    expect(product1Name).toBeInTheDocument();
});