import React from 'react';
import { render,screen } from '@testing-library/react';
import Product from '../Product';

test('renders Product 1 details', () => {
    const inputProduct= {image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
        name : "Laptop bag",description : "Your perfect pack for everday", price : "INR 4000"}
    render(<Product productDetails = {inputProduct}/>);
    const name = screen.getByRole("heading" , {name : inputProduct.name});
    const description = screen.getByText(inputProduct.description);
    const price = screen.getByRole("heading" , {name : inputProduct.price});

    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(price).toBeInTheDocument();
});

test("should render add to cart button" , () =>{
    const inputProduct1 = {image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
        name : "Laptop bag",description : "Your perfect pack for everday", price : "INR 4000"}
    render(<Product productDetails={inputProduct1} />)

    const addToCartButton = screen.getByRole("button" , {name: "Add to Cart"})
    expect(addToCartButton).toBeInTheDocument();
});


