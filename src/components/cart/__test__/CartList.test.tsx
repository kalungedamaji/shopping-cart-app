import {fireEvent, render, screen, within} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import App from "../../../App";
import React from "react";
import CartList from "../CartList";

const MockApp = () => {
    const inputAppName = "Manyavar Shop";
    return (
        <BrowserRouter>
            <App appName={inputAppName}/>
        </BrowserRouter>
    )
}
test('should renders empty shopping cart list', () => {
    window.history.pushState({}, '', '/')
    render(<CartList setCartPageStateHandler={() => {}}/>);
    const cartPageContent = screen.getByRole('list')
    expect(cartPageContent).toBeEmptyDOMElement();
});

test('should return number of products in cart', () => {
    window.history.pushState({}, '', '/')

    render(<MockApp/>);

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