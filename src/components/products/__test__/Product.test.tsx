import {render, screen} from "@testing-library/react";
import React from "react";
import Product, {ProductDetails} from "../Product";
describe("should display product details",()=> {


    it('should display product name', () => {
        const product:ProductDetails ={
            name:"Mens Casual Premium Slim Fit T-Shirts",
            description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
            price:200,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU"
        }
        render(<Product productDetail={product}/>);
        const nameElement = screen.getByRole('heading', {name: "Mens Casual Premium Slim Fit T-Shirts"});
        expect(nameElement).toBeInTheDocument();
    });

    it('should display product description', () => {
        const product:ProductDetails ={
            name:"Mens Casual Premium Slim Fit T-Shirts",
            description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
            price:200,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU"
        }
        render(<Product productDetail={product}/>);
        const descriptionElement = screen.getByText("Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.");
        expect(descriptionElement).toBeInTheDocument();
    });

    it('should display product price', () => {
        const product:ProductDetails ={
            name:"Mens Casual Premium Slim Fit T-Shirts",
            description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
            price:22.3,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU"
        }
        render(<Product productDetail={product}/>);
        const priceElement = screen.getByRole("heading",{name:'INR 22.3'});
        expect(priceElement).toBeInTheDocument();
    });
});