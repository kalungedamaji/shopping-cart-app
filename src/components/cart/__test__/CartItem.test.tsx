import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import App from "../../../App";
import CartItem from "../CartItem";
import {CartItemType, ProductDetails} from "../../products/Product";
const MockApp = () => {
    const inputAppName = "Manyavar Shop";
    return (
        <BrowserRouter>
            <App appName={inputAppName}/>
        </BrowserRouter>
    )
}
describe("test cases for + and - button", () => {
    test("should render + button ", () => {
        render(<MockApp/>);

        const addCartButton = screen.getByLabelText("Laptop bag")
        fireEvent.click(addCartButton)
        const linkButton = screen.getByRole("link", {name: "Cart"});
        fireEvent.click(linkButton)

        const plusButton = screen.getByRole("button" , {name : "+"})
        expect(plusButton).toBeInTheDocument();
    })

    test("should render - button ", () => {
        render(<MockApp/>);

        const addCartButton = screen.getByLabelText("Mens Casual T-shirt")
        fireEvent.click(addCartButton)
        const linkButton = screen.getByRole("link", {name: "Cart"});
        fireEvent.click(linkButton)

        const minusButton = screen.getByRole("button" , {name : "-"})
        expect(minusButton).toBeInTheDocument();
    })
})
describe("test cartItem" , ()=>{
test('should renders product name when product is added and cart button is clicked', () => {

    render(<MockApp/>);

    const addCartButton = screen.getByLabelText("Laptop bag")
    fireEvent.click(addCartButton)
    const linkButton = screen.getByRole("link", {name: "Cart"});
    fireEvent.click(linkButton)

    const product1Name = screen.getByText("Laptop bag")
    expect(product1Name).toBeInTheDocument();
});
})

describe("functionality of + button" , ()=>{
    const product:CartItemType ={
        name:"Mens Casual Premium Slim Fit T-Shirts",
        price:200,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
        quantity: 1
    }

    test('should render increased quantity of product if + button is clicked', () => {
        render(<CartItem cartItem={product}/>);

        const plusButton = screen.getByRole("button" , {name: "+"})
        fireEvent.click(plusButton)

        const quantity = screen.getByText("Qty: 2")
        expect(quantity).toBeInTheDocument();
    });

    test('should renders a popup if quantity is max i.e 10', () => {
        render(<CartItem cartItem={product}/>);

        const plusButton = screen.getByRole("button" , {name: "+"})
        for(let i =1; i<=11 ; i++){
            fireEvent.click(plusButton)
        }

        const quantity = screen.getByText("Qty: 2")
        expect(quantity).toBeInTheDocument();
    });
})

describe("functionality of - button",()=>{
    test("should render the product quantity when - button is clicked",()=>{
        const product:CartItemType ={
            name:"Mens Casual Premium Slim Fit T-Shirts",
            price:200,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
            quantity: 1
        }
        render(<CartItem cartItem={product}/>);

        const minusButton = screen.getByRole("button", {name: "-"})
        fireEvent.click(minusButton)

        const quantity = screen.getByText("Qty: 0")
        expect(quantity).toBeInTheDocument();
    })
})