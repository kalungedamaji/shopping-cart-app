import {render, screen} from "@testing-library/react";
import Product, {ProductDetail} from "../Product";
import { BrowserRouter } from "react-router-dom";
import App from "../../../App";


describe("should display product details",()=> {


    it('should display product name', () => {
        const product:ProductDetail ={
            name:"Mens Casual Premium Slim Fit T-Shirts",
            description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
            price: 22.3,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU"
        }
        render(<Product productDetail={product}/>);
        const nameElement = screen.getByRole('heading', {name: "Mens Casual Premium Slim Fit T-Shirts"});
        expect(nameElement).toBeInTheDocument();
    });

    it('should display product description', () => {
        const product:ProductDetail ={
            name:"Mens Casual Premium Slim Fit T-Shirts",
            description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
            price: 22.3,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU"
        }
        render(<Product productDetail={product}/>);
        const descriptionElement = screen.getByText("Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.");
        expect(descriptionElement).toBeInTheDocument();
    });

    it('should display product price', () => {
        const product:ProductDetail ={
            name:"Mens Casual Premium Slim Fit T-Shirts",
            description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
            price: 22.3,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU"
        }
        render(<Product productDetail={product}/>);
        const priceElement = screen.getByRole('heading', {name: "INR 22.3"});
        expect(priceElement).toBeInTheDocument();
    });
});

describe("add to cart button should render product in cart ", () => {

    it('should render add to cart button in home page', () => {


        render(
            <BrowserRouter>
            <App />
            </BrowserRouter>);
       
        const addToCartButtonElement = screen.getAllByRole("button", {name: "Add to Cart"});
        
        expect(addToCartButtonElement[0]).toBeInTheDocument();
    });
    
});

