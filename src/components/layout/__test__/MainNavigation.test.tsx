import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import App from "../../../App";
import React from "react";

const MockApp=()=>{
    const inputAppName="Manyvar Shop";
    return(
    <BrowserRouter>
        <App appName={inputAppName}/>
    </BrowserRouter>
    )}

test('should renders Cart link from MainNavigation', () => {
    render(<MockApp/>);

    expect(screen.getByRole('link' , { name: 'Cart' })).toHaveAttribute('href', '/CartPage');
});

test('should renders Store link from MainNavigation', () => {

    render(<MockApp/>);

    expect(screen.getByRole('link' , { name: 'Store' })).toHaveAttribute('href', '/');
});

