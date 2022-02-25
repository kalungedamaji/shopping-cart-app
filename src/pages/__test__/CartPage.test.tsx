import {fireEvent, getByRole, render, screen, within} from "@testing-library/react";
import React from "react";

import App from "../../App";
import {BrowserRouter} from "react-router-dom";

describe("Cart page tests", () => {

    const MockApp = () => {
        const inputAppName = "Manyavar Shop";
        return (
            <BrowserRouter>
                <App appName={inputAppName}/>
            </BrowserRouter>
        )
    }
    beforeEach(() => {
        render(<MockApp/>);
    });
    test('should renders product name when product is added and cart button is clicked', () => {

        //render(<MockApp/>);

        const addCartButton = screen.getByLabelText("Laptop bag")
        fireEvent.click(addCartButton)
        const linkButton = screen.getByRole("link", {name: "Cart"});
        fireEvent.click(linkButton)

        const product1Name = screen.getByText("Laptop bag")
        expect(product1Name).toBeInTheDocument();
    });
    test('should return number of products in cart', () => {

        //render(<MockApp/>);

        const addCartButton = screen.getByLabelText("Laptop bag")
        const addCartButton2 = screen.getByLabelText("Mens Casual T-shirt")
        fireEvent.click(addCartButton)
        fireEvent.click(addCartButton2)

        const linkButton = screen.getByRole("link", {name: "Cart"});
        fireEvent.click(linkButton)
        const cartPageContent = screen.getByRole('list')
        const {getAllByRole} = within(cartPageContent)
        const items = getAllByRole("listitem")

        expect(items.length).toBe(2);
    });
    test('should renders empty shopping cart ', () => {

        //render(<MockApp/>);
        const linkButton = screen.getByRole("link", {name: "Cart"});
        fireEvent.click(linkButton)
        const cartPageContent = screen.getByRole('list')
        expect(cartPageContent).toBeEmptyDOMElement();

    });
})
