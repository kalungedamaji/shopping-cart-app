import { render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import MainNavigation from "../MainNavigation";

const MockMainNavigation=()=>{
    return(
        <BrowserRouter><MainNavigation/></BrowserRouter>
    )}

test('should renders Cart link from MainNavigation', () => {
    render(<MockMainNavigation/>);
    expect(screen.getByRole('link' , { name: 'Cart' })).toHaveAttribute('href', '/CartPage');
});

test('should renders Store link from MainNavigation', () => {
    render(<MockMainNavigation/>);
    expect(screen.getByRole('link' , { name: 'Store' })).toHaveAttribute('href', '/');
});

