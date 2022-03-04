import React from "react";
import {fireEvent, render, screen, waitForElementToBeRemoved} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import App from "../../../App";
import CartItem from "../CartItem";
import {CartItemType} from "../../products/Product";

const MockApp = () => {
    const inputAppName = "Manyavar Shop";
    return (
        <BrowserRouter>
            <App appName={inputAppName}/>
        </BrowserRouter>
    )
}
describe("test cases to render + and - button", () => {
    test("should render + button", () => {
        render(<MockApp/>);

        const addCartButton = screen.getByLabelText("Laptop bag")
        fireEvent.click(addCartButton)
        const linkButton = screen.getByRole("link", {name: "Cart"});
        fireEvent.click(linkButton)

        const plusButton = screen.getByRole("button", {name: "+"})
        expect(plusButton).toBeInTheDocument();
    })

    test("should render - button", () => {
        window.history.pushState({}, '', '/')

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
            window.history.pushState({}, '', '/')

            render(<MockApp/>);

            const addCartButton = screen.getByLabelText("Laptop bag")
            fireEvent.click(addCartButton)
            const linkButton = screen.getByRole("link", {name: "Cart"});
            fireEvent.click(linkButton)

            const product1Name = screen.getByText("Laptop bag")
            expect(product1Name).toBeInTheDocument();
        });
        test('should renders product price when product is added and cart button is clicked', () => {
            window.history.pushState({}, '', '/')

            render(<MockApp/>);

            const addCartButton = screen.getByLabelText("Laptop bag")
            fireEvent.click(addCartButton)
            const linkButton = screen.getByRole("link", {name: "Cart"});
            fireEvent.click(linkButton)

            const productPrice = screen.getByText('Price : INR 4000')
            expect(productPrice).toBeInTheDocument();
        });
        test('should renders product total price when product is added and cart button is clicked', () => {
            window.history.pushState({}, '', '/')

            render(<MockApp/>);

            const addCartButton = screen.getByLabelText("Laptop bag")
            fireEvent.click(addCartButton)
            const linkButton = screen.getByRole("link", {name: "Cart"});
            fireEvent.click(linkButton)

            const productTotalPrice = screen.getByText('Total : INR 4000')
            expect(productTotalPrice).toBeInTheDocument();
        });

})

describe("functionality of + button" , ()=>{
    const product:CartItemType ={
        name:"Mens Casual Premium Slim Fit T-Shirts",
        price:200,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
        quantity: 1
    }
    function stateHandler() {}

    test('should render increased quantity of product if + button is clicked', () => {
        window.history.pushState({}, '', '/')

        render(<CartItem cartItem={product} setCartPageState={stateHandler}/>);

        const plusButton = screen.getByRole("button" , {name: "+"})
        fireEvent.click(plusButton)

        const quantity = screen.getByText("Qty: 2")
        expect(quantity).toBeInTheDocument();
    });

    test('should render a popup if quantity is max i.e 10', () => {
        window.history.pushState({}, '', '/')


        render(<CartItem cartItem={product} setCartPageState={stateHandler} />);

        const plusButton = screen.getByRole("button" , {name: "+"})
        for(let i =1; i<=11 ; i++){
            fireEvent.click(plusButton)
        }
        const popupTitle = screen.getByText("Maximum Limit")
        expect(popupTitle).toBeInTheDocument();
    });

    test('should render updated total price when qty is increased', () => {
        window.history.pushState({}, '', '/')
        render(<CartItem cartItem={product} setCartPageState={stateHandler} />);

        const plusButton = screen.getByRole("button" , {name: "+"})
        fireEvent.click(plusButton)
        const totalProductPrice = screen.getByText("Total : INR 400")

        expect(totalProductPrice).toBeInTheDocument();
    });
})


describe("functionality of - button",()=>{
    const product:CartItemType ={
        name:"Mens Casual Premium Slim Fit T-Shirts",
        price:200,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
        quantity: 1}
    function stateHandler() {

    }

    test("should render the decreased product quantity when - button is clicked",()=>{
        window.history.pushState({}, '', '/')

        const product:CartItemType ={
            name:"Mens Casual Premium Slim Fit T-Shirts",
            price:200,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
            quantity: 2
        }
        render(<CartItem cartItem={product} setCartPageState={stateHandler}/>);
        const minusButton = screen.getByRole("button", {name: "-"})
        fireEvent.click(minusButton)

        const quantity = screen.getByText("Qty: 1")
        expect(quantity).toBeInTheDocument();
    })

    test("should render a popup when - button is clicked and quantity is 1", ()=>{
        window.history.pushState({}, '', '/')

        render(<CartItem cartItem={product} setCartPageState={stateHandler}/>);

        const minusButton = screen.getByRole("button", {name: "-"})
        fireEvent.click(minusButton)

        const popupTitle = screen.getByText("Remove from cart?")
        expect(popupTitle).toBeInTheDocument();
    })

    test("should remove the cart item when yes is clicked on popup", async () =>{

        window.history.pushState({}, '', '/')

        render(<MockApp/>);
            const addCartButton = screen.getByLabelText("Mens Casual T-shirt")
            fireEvent.click(addCartButton)
            const linkButton = screen.getByRole("link", {name: "Cart"});
            fireEvent.click(linkButton)

            const minusButton = screen.getByRole("button", {name: "-"})
            fireEvent.click(minusButton);
            const yesButton = screen.getByRole('button' , {name : 'YES'} )
            fireEvent.click(yesButton);
            const productName = screen.getByText('Mens Casual T-shirt')

            await waitForElementToBeRemoved(() => screen.queryByText('Mens Casual T-shirt'))
            expect(productName).not.toBeInTheDocument();
    })

    test("should render cart item with qty as 1 when no is clicked on popup", () =>{
        window.history.pushState({}, '', '/')

        render(<MockApp/>);
        const addCartButton = screen.getByLabelText("Mens Casual T-shirt")
        fireEvent.click(addCartButton)
        const linkButton = screen.getByRole("link", {name: "Cart"});
        fireEvent.click(linkButton)

        const minusButton = screen.getByRole("button", {name: "-"})
        fireEvent.click(minusButton);
        const noButton = screen.getByText('NO')
        fireEvent.click(noButton);

        const quantity = screen.getByText('Qty: 1')
        expect(quantity).toBeInTheDocument();
    })
})