import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import Header from "../Header";
import CartPage from "../../../pages/cart-page/CartPage";
import App from "../../../App";

it('should render the view cart button', () => {
    const inputHomePageName="Team 1 Mega Mart";
    render
    (<BrowserRouter>
        <Header homePageName={inputHomePageName}/>
    </BrowserRouter>);

    const shoppingCartButtonElement = screen.getByRole("button",{name:"View Cart"})

    expect(shoppingCartButtonElement).toBeInTheDocument();
});

it.only('should render cart-page when view cart button is pressed', () => {
    const inputHomePageName="Team 1 Mega Mart";
    render
    (<BrowserRouter>
        <App/>
    </BrowserRouter>);

    const shoppingCartButtonElement = screen.getByRole("button",{name:"View Cart"})
    fireEvent.click(shoppingCartButtonElement);
    const cartPageHeaderName = screen.getByRole("heading", {name: "Your Shopping Cart"});

    expect(cartPageHeaderName).toBeInTheDocument();
});