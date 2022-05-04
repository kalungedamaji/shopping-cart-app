import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import OrdersPage from "../OrdersPage";

it("should render main header", () => {

    render(<BrowserRouter><OrdersPage /></BrowserRouter>)
    const ordersPageMainHeaderElement=screen.getByRole("heading", {name: "Meta Mart"})
    expect(ordersPageMainHeaderElement).toBeInTheDocument();
});