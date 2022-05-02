import { render, screen } from "@testing-library/react"
import PaymentPage from "../PaymentPage"

it("should render payment page header", () => {

    render(<PaymentPage />)
    const paymentPageHeaderElement=screen.getByText( "Payment Page")
    //getByRole("heading", {name: "Payment Page"})
    expect(paymentPageHeaderElement).toBeInTheDocument();
})
