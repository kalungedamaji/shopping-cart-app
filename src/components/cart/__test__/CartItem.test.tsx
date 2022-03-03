import {render, screen} from '@testing-library/react'
import { CartProductDetail } from '../../../store/CartContext';
import Cart from '../CartItem';

const testProduct:CartProductDetail ={
    name:"Mens Casual Premium Slim Fit T-Shirts",
    quantity: 1,
    price: 22.3,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU"
}

describe("author test cases to render product layout in cart page", () => {

    
    
    it("should render product name in cart page", () => {

        render(<Cart cartProductDetail={testProduct} setRenderedCartList={()=> {}} />);
        const productNameElement = screen.getByRole("heading", {name:"Mens Casual Premium Slim Fit T-Shirts"})

        expect(productNameElement).toBeInTheDocument();
    })

    it("should render product image in cart page", () => {
        
        render(<Cart cartProductDetail={testProduct} setRenderedCartList={()=> {}}/>);
        const productImageElement = screen.getByAltText("Mens Casual Premium Slim Fit T-Shirts")

        expect(productImageElement).toBeInTheDocument();
    })

    it("should render product price in cart page", () => {
        
        render(<Cart cartProductDetail={testProduct} setRenderedCartList={()=> {}}/>);
        const productPriceElement = screen.getByText("Price : 22.3")
    
        expect(productPriceElement).toBeInTheDocument();
    })

    it("should render decrement button in cart page", () => {
        
        render(<Cart cartProductDetail={testProduct} setRenderedCartList={()=> {}}/>);
        const decrementButtonElement = screen.getByRole("button" , {name: "-"})
    
        expect(decrementButtonElement).toBeInTheDocument();
    })

    it("should render product quantity in cart page", () => {
        
        render(<Cart cartProductDetail={testProduct} setRenderedCartList={()=> {}}/>);
        const productQuantityElement = screen.getByText("Quantity : 1")
    
        expect(productQuantityElement).toBeInTheDocument();
    })

    it("should render increment button in cart page", () => {
        
        render(<Cart cartProductDetail={testProduct} setRenderedCartList={()=> {}}/>);
        const incrementButtonElement = screen.getByRole("button" , {name: "+"})
    
        expect(incrementButtonElement).toBeInTheDocument();
    })

    it("should render total product price in cart page", () => {
        
        render(<Cart cartProductDetail={testProduct} setRenderedCartList={()=> {}}/>);
        const totalCartPriceElement = screen.getByText("Total : 22.3")
    
        expect(totalCartPriceElement).toBeInTheDocument();
    })

    it("should render remove button in cart page",()=>{
        
        render(<Cart cartProductDetail={testProduct} setRenderedCartList={()=> {}}/>);
        const removeButtonElement = screen.getByRole("button" , {name: "Remove"})
    
        expect(removeButtonElement).toBeInTheDocument();
    })
})
