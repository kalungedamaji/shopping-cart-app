import React from 'react';
import {render, screen} from "@testing-library/react";

import CartButton from "../CartButton";



test("should render cart button", ()=>{
    render(<CartButton/>)
    const cartButton = screen.getByRole('button', {name:"Cart Button"});
    expect(cartButton).toBeInTheDocument();

});