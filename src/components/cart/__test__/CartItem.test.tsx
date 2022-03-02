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
        const productNameElement = screen.getByRole("heading", {name:"Mens Casual Premium Slim Fit T-Shirts"})

        expect(productNameElement).toBeInTheDocument();
    })

    it("should render product image in cart page", () => {
        
        render(<Cart productDetail={testProduct}/>);
        const productImageElement = screen.getByAltText("Mens Casual Premium Slim Fit T-Shirts")

        expect(productImageElement).toBeInTheDocument();
    })

    it("should render product price in cart page", () => {
        
        render(<Cart productDetail={testProduct}/>);
        const productPriceElement = screen.getByText("Price : 22.3")
    
        expect(productPriceElement).toBeInTheDocument();
    })

    it("should render decrement button in cart page", () => {
        
        render(<Cart productDetail={testProduct}/>);
        const decrementButtonElement = screen.getByRole("button" , {name: "-"})
    
        expect(decrementButtonElement).toBeInTheDocument();
    })

    it("should render product quantity in cart page", () => {
        
        render(<Cart productDetail={testProduct}/>);
        const productQuantityElement = screen.getByText("Quantity : 1")
    
        expect(productQuantityElement).toBeInTheDocument();
    })

    it("should render increment button in cart page", () => {
        
        render(<Cart productDetail={testProduct}/>);
        const incrementButtonElement = screen.getByRole("button" , {name: "+"})
    
        expect(incrementButtonElement).toBeInTheDocument();
    })

    it("should render total product price in cart page", () => {
        
        render(<Cart productDetail={testProduct}/>);
        const totalCartPriceElement = screen.getByText("Total : 22.3")
    
        expect(totalCartPriceElement).toBeInTheDocument();
    })
})

describe("User should increase or decrease quantity of cart item", () => {

    it("should increase the value of quantity by 1 when increment button is clicked", () => {
        render(<Cart productDetail={testProduct}/>);
        const incrementButtonElement = screen.getByRole('button', {name:"+"});

        fireEvent.click(incrementButtonElement);
        const productQuantityElement = screen.getByText("Quantity : 2")

        expect(productQuantityElement).toBeInTheDocument();
    })


    it("should decrease quantity by 1 unit when decrement button is pressed",()=>{

        render(<Cart productDetail={testProduct}/>);
        const decrementButtonElement = screen.getByRole('button', {name:"-"});

        fireEvent.click(decrementButtonElement);
        const productQuantityElement = screen.getByText("Quantity : 0")

        expect(productQuantityElement).toBeInTheDocument();
    })
})

describe("User has ability to remove item from cart", () => {

    it("should render remove button in cart page",()=>{
        render(<Cart productDetail={testProduct}/>);
        const removeButtonElement = screen.getByRole("button" , {name: "Remove"})
    
        expect(removeButtonElement).toBeInTheDocument();
    })
    
    it("should remove item from cart when delete button is clicked", () => {

        render(<Cart productDetail = {testProduct} />);
        const removeButtonElement = screen.getByRole("button", {name: "Remove"});

        fireEvent.click(removeButtonElement);
        const removedItemElement = screen.getByRole("heading", {name: "Mens Casual Premium Slim Fit T-Shirts"})

        expect(removedItemElement).not.toBeInTheDocument();

    })
})