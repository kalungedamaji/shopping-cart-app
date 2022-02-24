import React from 'react';
import { render, screen} from "@testing-library/react";
import CartPage from "../CartPage";
import {ProductDetails} from "../../product/Product";

// test('should renders empty shopping cart on clicking shopping cart button', () => {
//     render(<CartPage/>);
//
//     const noOfProducts = screen.queryByText("Price");
//     expect(noOfProducts).not.toBeInTheDocument();
// });

// test('should be able to add products in the cart list', () => {
//     const inputProduct1:ProductDetails= {
//         image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DEPI4N9XwG1K7nZb8LG-6VoUgNi-y9IlOg&usqp=CAU " ,
//         name : "Mens Casual T-shirt",
//         description : "A classic check shirt in Navy Can be worn for from office to after meeting evening get together.",
//         price : "INR. 2200" }
//     render(<AddProduct product = {inputProduct1} />);
//
//     const noOfProducts = screen.getAllByText("Price");
//     expect(noOfProducts).toBe(1);
// });



