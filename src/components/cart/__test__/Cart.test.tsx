import {render, screen} from '@testing-library/react'
import { ProductDetail } from '../../product-store/Product';
import Cart from '../Cart';


describe("author test cases to render product layout in cart page", () => {

    const product:ProductDetail ={
        name:"Mens Casual Premium Slim Fit T-Shirts",
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
        price: 22.3,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU"
    }
    
    it("should render product name in cart page", () => {

        render(<Cart productDetail={product}/>);
        const cartProductNameElement = screen.getByRole("heading", {name:"Mens Casual Premium Slim Fit T-Shirts"})

        expect(cartProductNameElement).toBeInTheDocument();
    })

    it("should render product image in cart page", () => {
        
        render(<Cart productDetail={product}/>);
        const cartProductImageElement = screen.getByAltText("Mens Casual Premium Slim Fit T-Shirts")

        expect(cartProductImageElement).toBeInTheDocument();
    })

    it("should render product price in cart page", () => {
        
        render(<Cart productDetail={product}/>);
        const cartProductPriceElement = screen.getByText("Price : 22.3")
    
        expect(cartProductPriceElement).toBeInTheDocument();
    })

    it("should render decrement button in cart page", () => {
        
        render(<Cart productDetail={product}/>);
        const cartProductDecrementButtonElement = screen.getByRole("button" , {name: "-"})
    
        expect(cartProductDecrementButtonElement).toBeInTheDocument();
    })

    it("should render product quantity in cart page", () => {
        
        render(<Cart productDetail={product}/>);
        const cartProductQuantityElement = screen.getByText("Quantity : 1")
    
        expect(cartProductQuantityElement).toBeInTheDocument();
    })

    it("should render increment button in cart page", () => {
        
        render(<Cart productDetail={product}/>);
        const cartProductIncrementButtonElement = screen.getByRole("button" , {name: "+"})
    
        expect(cartProductIncrementButtonElement).toBeInTheDocument();
    })

    it("should render total product price in cart page", () => {
        
        render(<Cart productDetail={product}/>);
        const cartTotalProductPriceElement = screen.getByText("Total : 22.3")
    
        expect(cartTotalProductPriceElement).toBeInTheDocument();
    })
})