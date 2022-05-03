import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";
import React from "react";
import PaymentPageHeader from "../payment-page/header/PaymentPageHeader";

const MockApp:React.FC = (() => {
  return (
      <BrowserRouter>
      <App />
      </BrowserRouter>
    )
})


describe("should render the functionality of add to cart and view cart button", () => {

  it("should render empty cart-page when view cart button is pressed", () => {
    render( <MockApp /> );
    
    const shoppingCartButtonElement = screen.getByRole("button", {name: "View Cart"});
    fireEvent.click(shoppingCartButtonElement);
    const cartPageBodyElement = screen.getByRole("heading", {name: "Your Cart is Empty !!",});
    
    expect(cartPageBodyElement).toBeInTheDocument();
    });

  it.only("should render a product in cart-page when view cart button is pressed", () => {
    
    render( <MockApp /> );

    const addToCartButtonElement = screen.getAllByRole("button", { name: "Add to Cart"});
    fireEvent.click(addToCartButtonElement[0]);
    const shoppingCartButtonElement = screen.getByRole("button", { name: "View Cart"});
    fireEvent.click(shoppingCartButtonElement);

    const cartPageBodyElement = screen.getAllByAltText("Laptop bag");

    expect(cartPageBodyElement).toBeInTheDocument;
  });

  it("should render multiple products in cart-page when view cart button is pressed", () => {
    
    render( <MockApp /> );

    const addToCartButtonElement = screen.getAllByRole("button", {name: "Add to Cart"});
    
    addToCartButtonElement.forEach(item => {fireEvent.click(item);})
      

    const shoppingCartButtonElement = screen.getByRole("button", {name: "View Cart",});
    fireEvent.click(shoppingCartButtonElement);
    const cartPageBodyElement = screen.getAllByRole("button", {name:"+"});

    expect(cartPageBodyElement.length).toBe(2);
  });

  it("should navigate to cart page when go to cart button is pressed",()=>{
    render(<PaymentPageHeader paymentPageName="Payment Page"/>)
    const goToCartButtonElement = screen.getByRole("button",{name:"Go To Cart"})
    fireEvent.click(goToCartButtonElement);
    const proceedToBuyButtonElement = screen.getByRole("button",{name:"Proceed To Buy"})
    expect(proceedToBuyButtonElement).toBeInTheDocument();
  });

});
