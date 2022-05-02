import { render, screen } from "@testing-library/react"
import CartPage from "../CartPage"
import {BrowserRouter} from "react-router-dom";


it("should render cart page header", () => {

    render(<BrowserRouter><CartPage /></BrowserRouter>)
    const cartPageHeaderElement=screen.getByRole("heading", {name: "Your Shopping Cart"})
    expect(cartPageHeaderElement).toBeInTheDocument();
});


