import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import App from "../../../App";
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