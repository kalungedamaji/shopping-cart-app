import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import CartPage from "../CartPage";
import {ProductDetails} from "../../product/Product";
import AddProductToCart from "../AddProductToCart";
import App from "../../App";
import {BrowserRouter} from "react-router-dom";

test('should renders product name when product is added to cart ', () => {
    const inputProduct1:ProductDetails = {
        image : " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
        name : "Laptop bag",
        description : "Your perfect pack for everday",
        price : "INR 4000"}
    const inputAppName="Manyvar Shop";
    render(<BrowserRouter>
        <App appName={inputAppName}/>
    </BrowserRouter>);

    const addCartButton = screen.getByLabelText("Laptop bag")
    fireEvent.click(addCartButton)
    const linkButton = screen.getByText(/Cart button/);
    fireEvent.click(linkButton)
    const product1Name = screen.getByText("Laptop bag")
    expect(product1Name).toBeInTheDocument();
});