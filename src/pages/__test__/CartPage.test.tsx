import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import App from "../../App";
import {BrowserRouter} from "react-router-dom";
import CartPage from "../CartPage";

describe("Cart page tests", () => {
    test("should render cart heading when cart button is clicked",()=>{
        render(<CartPage/>)
        const cartHeading = screen.getByRole("heading" , {name: "Your Shopping Cart"})
        expect(cartHeading).toBeInTheDocument();
    })
})

describe("subtotal tests",()=>{
    const MockApp = () => {
        const inputAppName = "Manyavar Shop";
        return (<BrowserRouter>
                <App appName={inputAppName}/>
            </BrowserRouter>
        )}
    test("should return the total cart value when product is added to cart",() =>{
        window.history.pushState({}, '', '/')

        render(<MockApp/>)
        const addCartButton = screen.getByLabelText("Mens Casual T-shirt")
        fireEvent.click(addCartButton)
        const linkButton = screen.getByRole("link", {name: "Cart"});
        fireEvent.click(linkButton)

        const totalCartValue = screen.getByRole("heading" , {name: "Subtotal : 2200"})
        expect(totalCartValue).toBeInTheDocument();
    })
    test("should return the total cart value when product is added to cart and quantity is added by 2",() =>{
        window.history.pushState({}, '', '/')

        render(<MockApp/>)
        const addCartButton = screen.getByLabelText("Mens Casual T-shirt")
        fireEvent.click(addCartButton)
        const linkButton = screen.getByRole("link", {name: "Cart"});
        fireEvent.click(linkButton)
        const addQuantityButton=screen.getByRole("button",{name:"+"})
        fireEvent.click(addQuantityButton)
        const totalCartValue = screen.getByRole("heading" , {name: "Subtotal : 4400"})
        expect(totalCartValue).toBeInTheDocument();
    })
    test("should return the total cart value when product is added to cart and quantity is decreased by 2",() =>{
        window.history.pushState({}, '', '/')

        render(<MockApp/>)
        const addCartButton = screen.getByLabelText("Mens Casual T-shirt")
        fireEvent.click(addCartButton)
        const linkButton = screen.getByRole("link", {name: "Cart"});
        fireEvent.click(linkButton)
        const addQuantityButton=screen.getByRole("button",{name:"+"})
        fireEvent.click(addQuantityButton)
        const decreaseQuantityButton=screen.getByRole("button",{name:"-"})
        fireEvent.click(decreaseQuantityButton)
        const totalCartValue = screen.getByRole("heading" , {name: "Subtotal : 2200"})
        expect(totalCartValue).toBeInTheDocument();
    })
})
