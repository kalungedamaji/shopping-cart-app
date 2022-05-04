import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";
import React from "react";

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


  it('should render Orders page when pay button is clicked', () => {
    render( <MockApp /> );
    const payButtonElement = screen.getByRole("button",{name:"Pay"})
    fireEvent.click(payButtonElement);
    const ordersPageHeaderElement = screen.getByText("Your Orders")
    expect(ordersPageHeaderElement).toBeInTheDocument();
  });
});
