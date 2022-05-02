import {screen, render, fireEvent} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import CartPageHeader from '../CartPageHeader'
import App from "../../../App";
import React from "react";

const MockCartHeader: React.FC = () => {
    const inputCartPageName = "Your Shopping Cart" 

    return (
      <BrowserRouter>
        <CartPageHeader cartPageName={inputCartPageName} />
      </BrowserRouter>
    );
  };
const MockApp:React.FC = (() => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
})

describe("should render cart page header", () => {

    it("should render cart page header name", () => {
        render(<MockCartHeader />)

        const headerNameElement = screen.getByRole("heading", {name: "Your Shopping Cart"})

        expect(headerNameElement).toBeInTheDocument();
    })

    it("should render cart total price", () => {
        render(<MockCartHeader />)

        const headerCartPriceElement = screen.getByRole("heading", {name: "Subtotal: 0"})

        expect(headerCartPriceElement).toBeInTheDocument();
    })

    // it("should render Home button", () => {
    //     render(<MockCartHeader />)
    //
    //     const headerHomeButtonElement = screen.getByRole("button", {name: "Your Shopping Cart"})
    //
    //     expect(headerHomeButtonElement).toBeInTheDocument();
    // })

    it("should render Proceed to buy button",() =>{
        render(<MockCartHeader />)

        const ProceedToBuyButton = screen.getByRole("button", {name: "Proceed To Buy"})

        expect((ProceedToBuyButton)).toBeInTheDocument();
    })
    it("should redirect to Payment page",() =>{
        render(<MockApp />)
        const shoppingCartButtonElement = screen.getByRole("button", {name: "View Cart"});
        fireEvent.click(shoppingCartButtonElement);
        const ProceedToBuyButton = screen.getByRole("button", {name: "Proceed To Buy"})
        fireEvent.click(ProceedToBuyButton);

        const message = screen.getByText( "Payment Page")

        expect(message).toBeInTheDocument();
    })
})

