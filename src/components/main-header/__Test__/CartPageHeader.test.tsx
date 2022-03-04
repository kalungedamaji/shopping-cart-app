import {screen, render} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import CartPageHeader from '../CartPageHeader'

const MockCartHeader: React.FC = () => {
    const inputCartPageName = "Your Shopping Cart" 

    return (
      <BrowserRouter>
        <CartPageHeader cartPageName={inputCartPageName} />
      </BrowserRouter>
    );
  };


describe("should render cart page header", () => {

    it("should render cart page header name", () => {
        render(<MockCartHeader />)

        const headerNameElement = screen.getByRole("heading", {name: "Your Shopping Cart"})

        expect(headerNameElement).toBeInTheDocument();
    })

    it("should render cart total price", () => {
        render(<MockCartHeader />)

        const headerCartPriceElement = screen.getByRole("heading", {name: "Cart Total Price: 0"})

        expect(headerCartPriceElement).toBeInTheDocument();
    })

    it("should render Home button", () => {
        render(<MockCartHeader />)

        const headerHomeButtonElement = screen.getByRole("button", {name: "Home"})

        expect(headerHomeButtonElement).toBeInTheDocument();
    })
})

