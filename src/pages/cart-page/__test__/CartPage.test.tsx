import { render, screen } from "@testing-library/react"
import CartPage from "../CartPage"


it("should render cart page header", () => {

    render(<CartPage />)
    const cartPageHeaderElement=screen.getByRole("heading", {name: "Your Shopping Cart"})
    
    expect(cartPageHeaderElement).toBeInTheDocument();
})