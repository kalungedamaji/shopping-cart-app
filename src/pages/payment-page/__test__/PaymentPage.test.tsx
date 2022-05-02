import { render, screen } from "@testing-library/react"
import PaymentPage from "../PaymentPage"

it("should render payment page header", () => {

    render(<PaymentPage />)
    const paymentPageHeaderElement=screen.getByRole("heading", {name: "Payments"})
    
    expect(paymentPageHeaderElement).toBeInTheDocument();
})
