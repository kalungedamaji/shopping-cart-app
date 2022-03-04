import React from 'react';
import { render, screen, within} from "@testing-library/react";
import StorePage from "../StorePage";

test('should render product list and return number of products in it on store page', () => {

    render(<StorePage/>);

    const cartPageContent = screen.getByRole('list')
    const {getAllByRole} = within(cartPageContent)
    const items = getAllByRole("listitem")

    expect(items.length).toBe(2);
});
