import React from 'react';
import {render, screen} from '@testing-library/react';
import ProductList from '../ProductList';
import {ProductDetails} from "../Product";

test('renders if two products are added', () => {
    const inputProduct1: ProductDetails = {
        image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU",
        name: "Laptop bag",
        description: "Your perfect pack for everyday",
        price: 4000
    }
    const inputProduct2: ProductDetails = {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU ",
        name: "Mens Casual T-shirt",
        description: "A classic check shirt in Navy Can be worn for from office to after meeting evening get together.",
        price: 2200
    }

    const productCollection: ProductDetails[] = [inputProduct1, inputProduct2]
    render(<ProductList products={productCollection}/>);

    const noOfProducts = screen.getAllByText("Add to Cart");
    expect(noOfProducts.length).toBe(2);
});