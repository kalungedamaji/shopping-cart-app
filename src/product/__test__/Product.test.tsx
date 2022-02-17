import {render, screen} from "@testing-library/react";
import React from "react";
import Product from "../Product";
describe("should display product details",()=> {


    it('should display product name', () => {
        render(<Product
            productName={"Mens Casual Premium Slim Fit T-Shirts"}
            productDescription={"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing."}
            productPrice={"$22.3"}
        />);
        const nameElement = screen.getByRole('heading', {name: "Mens Casual Premium Slim Fit T-Shirts"});
        expect(nameElement).toBeInTheDocument();
    });

    it('should display product description', () => {
        render(<Product
            productName={"Mens Casual Premium Slim Fit T-Shirts"}
            productDescription={"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing."}
            productPrice={"$22.3"}
        />);
        const descriptionElement = screen.getByText("Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.");
        expect(descriptionElement).toBeInTheDocument();
    });

    it('should display product price', () => {
        render(<Product
            productName={"Mens Casual Premium Slim Fit T-Shirts"}
            productDescription={"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing."}
            productPrice={"$22.3"}
        />);
        const priceElement = screen.getByRole('heading', {name: "$22.3"});
        expect(priceElement).toBeInTheDocument();
    });
});
