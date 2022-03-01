import {fireEvent, render, screen} from '@testing-library/react'
import { ProductDetail } from '../../product-store/Product';
import Cart from '../CartItem';
import CartItem from "../CartItem";

const testProduct:ProductDetail ={
    name:"Mens Casual Premium Slim Fit T-Shirts",
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
    price: 22.3,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU"
}

describe("author test cases to render product layout in cart page", () => {

    
    
    it("should render product name in cart page", () => {

        render(<Cart productDetail={testProduct}/>);
        const cartProductNameElement = screen.getByRole("heading", {name:"Mens Casual Premium Slim Fit T-Shirts"})

        expect(cartProductNameElement).toBeInTheDocument();
    })

    it("should render product image in cart page", () => {
        
        render(<Cart productDetail={testProduct}/>);
        const cartProductImageElement = screen.getByAltText("Mens Casual Premium Slim Fit T-Shirts")

        expect(cartProductImageElement).toBeInTheDocument();
    })

    it("should render product price in cart page", () => {
        
        render(<Cart productDetail={testProduct}/>);
        const cartProductPriceElement = screen.getByText("Price : 22.3")
    
        expect(cartProductPriceElement).toBeInTheDocument();
    })

    it("should render decrement button in cart page", () => {
        
        render(<Cart productDetail={testProduct}/>);
        const cartProductDecrementButtonElement = screen.getByRole("button" , {name: "-"})
    
        expect(cartProductDecrementButtonElement).toBeInTheDocument();
    })

    it("should render product quantity in cart page", () => {
        
        render(<Cart productDetail={testProduct}/>);
        const cartProductQuantityElement = screen.getByText("Quantity : 1")
    
        expect(cartProductQuantityElement).toBeInTheDocument();
    })

    it("should render increment button in cart page", () => {
        
        render(<Cart productDetail={testProduct}/>);
        const cartProductIncrementButtonElement = screen.getByRole("button" , {name: "+"})
    
        expect(cartProductIncrementButtonElement).toBeInTheDocument();
    })

    it("should render total product price in cart page", () => {
        
        render(<Cart productDetail={testProduct}/>);
        const cartTotalProductPriceElement = screen.getByText("Total : 22.3")
    
        expect(cartTotalProductPriceElement).toBeInTheDocument();
    })
})

describe("Author test case for the functionality of increment and decrement button", () => {
    
    it("should increase the value of quantity by 1 when increment button is clicked", () => {
        render(<Cart productDetail={testProduct}/>);
        

        const incrementButtonElement = screen.getByRole('button', {name:"+"});
        
        fireEvent.click(incrementButtonElement);
        const productQuantityElement = screen.getByText("Quantity : 2")
        const productElementV = screen.getByText("Quantity : 2")
        const productElement = screen.getByText("Quantity : 2")

        expect(productQuantityElement).toBeInTheDocument();
    }) 
})