import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import OrdersPage from "../OrdersPage";
import React from "react";

it("should render main header", () => {

    render(<BrowserRouter><OrdersPage /></BrowserRouter>)
    const ordersPageMainHeaderElement=screen.getByRole("heading", {name: "Meta Mart"})
    expect(ordersPageMainHeaderElement).toBeInTheDocument();
});

it("should render orders page header ", () => {

    render(<BrowserRouter><OrdersPage /></BrowserRouter>)
    const headerNameElement = screen.getByRole("heading", {name: "My Orders"})
    expect(headerNameElement).toBeInTheDocument();
})