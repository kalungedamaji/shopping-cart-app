import {render , screen} from '@testing-library/react'
import { ProductDetails } from '../../product/Product'
import Cart from '../Cart'

describe("should render product in Cart of Shopping Cart Application", () => {
    

    it("should render product image in Cart", () => {

        const inputProduct: ProductDetails = {
        image : " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
        name : "Laptop bag",
        description : "Your perfect pack for everday",
        price : "INR 4000"} 

        render(<Cart product={inputProduct}/>)

        const cartProductImageElement = screen.getByAltText("Laptop bag")
        expect(cartProductImageElement).toBeInTheDocument();
        
    })

    it("should render product name in Cart", () => {

        const inputProduct: ProductDetails = {
        image : " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
        name : "Laptop bag",
        description : "Your perfect pack for everday",
        price : "INR 4000"} 

        render(<Cart product={inputProduct}/>)

        const cartProductNameHeaderElement = screen.getByRole("heading", {name:"Laptop bag"})
        expect(cartProductNameHeaderElement).toBeInTheDocument();
        
    })

    it("should render product description in Cart", () => {

        const inputProduct: ProductDetails = {
        image : " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
        name : "Laptop bag",
        description : "Your perfect pack for everday",
        price : "INR 4000"} 

        render(<Cart product={inputProduct}/>)

        const cartProductDescriptionBodyElement = screen.getByText("Your perfect pack for everday")
        expect(cartProductDescriptionBodyElement).toBeInTheDocument();
        
    })

    it("should render product price in Cart", () => {

        const inputProduct: ProductDetails = {
        image : " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
        name : "Laptop bag",
        description : "Your perfect pack for everday",
        price : "INR 4000"} 

        render(<Cart product={inputProduct}/>)

        const cartProductPriceBodyElement = screen.getByText("INR 4000")
        expect(cartProductPriceBodyElement).toBeInTheDocument();
        
    })
})