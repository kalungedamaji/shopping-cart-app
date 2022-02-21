import {render , screen} from '@testing-library/react'
import { ProductDetail } from '../../product/Product'
import Cart from '../Cart'

describe("should render product in Cart of Shopping Cart Application", () => {
    

    it("should render product image in Cart", () => {

        const inputProduct: ProductDetail = {
        image : " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
        name : "Laptop bag",
        description : "Your perfect pack for everday",
        price : 4000} 
        const inputQuantity = 1;

        render(<Cart product={inputProduct} quantity={inputQuantity}/>)

        const cartProductImageElement = screen.getByAltText("Laptop bag")
        expect(cartProductImageElement).toBeInTheDocument();
        
    })

    it("should render product name in Cart", () => {

        const inputProduct: ProductDetail = {
        image : " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
        name : "Laptop bag",
        description : "Your perfect pack for everday",
        price : 4000} 
        const inputQuantity = 1;

        render(<Cart product={inputProduct} quantity={inputQuantity}/>)

        const cartProductNameHeaderElement = screen.getByRole("heading", {name:"Laptop bag"})
        expect(cartProductNameHeaderElement).toBeInTheDocument();
        
    })

    it("should render product price in Cart", () => {

        const inputProduct: ProductDetail = {
        image : " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
        name : "Laptop bag",
        description : "Your perfect pack for everday",
        price : 4000} 
        const inputQuantity = 1;

        render(<Cart product={inputProduct} quantity={inputQuantity}/>)

        const cartProductPriceBodyElement = screen.getByText("Price : 4000")
        expect(cartProductPriceBodyElement).toBeInTheDocument();
        
    })

    it("should render decrement button in Cart", () => {

        const inputProduct: ProductDetail = {
        image : " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
        name : "Laptop bag",
        description : "Your perfect pack for everday",
        price : 4000} 
        const inputQuantity = 1;

        render(<Cart product={inputProduct} quantity={inputQuantity}/>)

        const cartProductBodyDecrementButtonElement = screen.getByRole("button", {name:"-"})
        expect(cartProductBodyDecrementButtonElement).toBeInTheDocument();
        
    })

    it("should render increment button in Cart", () => {

        const inputProduct: ProductDetail = {
        image : " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
        name : "Laptop bag",
        description : "Your perfect pack for everday",
        price : 4000} 
        const inputQuantity = 1;

        render(<Cart product={inputProduct} quantity={inputQuantity}/>)

        const cartProductBodyIncrementButtonElement = screen.getByRole("button", {name:"+"})
        expect(cartProductBodyIncrementButtonElement).toBeInTheDocument();
        
    })

    it("should render Product quantity in cart",()=>{
        const inputProduct: ProductDetail = {
            image : " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
            name : "Laptop bag",
            description : "Your perfect pack for everday",
            price : 4000}
            const inputQuantity = 5;

            render(<Cart product={inputProduct} quantity={inputQuantity}/>)

            const cartProductQuantityBodyElement = screen.getByText("Quantity : 5");
            expect(cartProductQuantityBodyElement).toBeInTheDocument();
    })

    it("should render total price of product in cart",()=>{
        const inputProduct: ProductDetail = {
            image : " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
            name : "Laptop bag",
            description : "Your perfect pack for everday",
            price : 4000}
        const inputQuantity = 5;

        render(<Cart product={inputProduct} quantity={inputQuantity}/>)

        const cartProductTotalPriceBodyElement = screen.getByText("Total : 20000");//
        expect(cartProductTotalPriceBodyElement).toBeInTheDocument();
    })
})