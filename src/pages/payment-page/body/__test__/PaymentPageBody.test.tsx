import {fireEvent, render, screen} from "@testing-library/react"
import PaymentPage from "../../PaymentPage";
import {BrowserRouter} from "react-router-dom";

describe("should render radio buttons" , ()=>{
it("should render debit card radio button", () =>{
    render(<BrowserRouter>
        <PaymentPage/>
    </BrowserRouter>);
    const debitButton = screen.getByRole("radio" ,{name: "DebitCard"})
    expect(debitButton).toBeInTheDocument();
})
it("should render google pay radio button", () =>{
    render(<BrowserRouter>
        <PaymentPage/>
    </BrowserRouter>);
    const payButton = screen.getByRole("radio" ,{name: "Google Pay"})
    expect(payButton).toBeInTheDocument();
})
it("should render net banking radio button", () =>{
    render(<BrowserRouter>
        <PaymentPage/>
    </BrowserRouter>);
    const netBankingButton = screen.getByRole("radio" ,{name: "Net Banking"})
    expect(netBankingButton).toBeInTheDocument();
})
})
describe("actions on clicking radio button", ()=>{
    it("should render 3 input fields on clicking debit card",()=>{
        render(<BrowserRouter>
            <PaymentPage/>
        </BrowserRouter>);
        const debitButton = screen.getByRole("radio" ,{name: "DebitCard"})

        fireEvent.click(debitButton);
        const cardNumberField = screen.getByPlaceholderText("Enter Card Number");
        const cvvField = screen.getByPlaceholderText("CVV");
        const yearField = screen.getByPlaceholderText("Year");

        expect(cardNumberField).toBeInTheDocument();
        expect(cvvField).toBeInTheDocument();
        expect(yearField).toBeInTheDocument();

    })
    it("should render input field on clicking google pay",()=>{
        render(<BrowserRouter>
            <PaymentPage/>
        </BrowserRouter>);
        const gpayButton = screen.getByRole("radio" ,{name: "Google Pay"})

        fireEvent.click(gpayButton);
        const upiField = screen.getByPlaceholderText("Enter UPI Id");
        expect(upiField).toBeInTheDocument();
    })
    it("should render input field on clicking net banking",()=>{
        render(<BrowserRouter>
            <PaymentPage/>
        </BrowserRouter>);
        const netBankingButton = screen.getByRole("radio" ,{name: "Net Banking"})

        fireEvent.click(netBankingButton);
        const loginIdField = screen.getByPlaceholderText("Enter Id");
        const passwordField = screen.getByPlaceholderText("Password");

        expect(loginIdField).toBeInTheDocument();
        expect(passwordField).toBeInTheDocument();
    })
})