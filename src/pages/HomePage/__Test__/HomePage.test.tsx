import React from 'react';
import HomePage from '../HomePage';
import { fireEvent, render,screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe("should render home page", () => {

it('should render title of the home page', () => {
  const inputAppName="Manyvar Shop";
  render(<BrowserRouter>
  <HomePage homePageName={inputAppName}/>
  </BrowserRouter>);

  const shoppingCartHeaderElement = screen.getByRole("heading",{name:inputAppName})

  expect(shoppingCartHeaderElement).toBeInTheDocument();
});

it('should render view cart button of the home page', () => {
  const inputAppName="Manyvar Shop";
  render(<BrowserRouter>
    <HomePage homePageName={inputAppName}/>
    </BrowserRouter>);

  const shoppingCartButtonElement = screen.getByRole("button",{name:"View Cart"})

  expect(shoppingCartButtonElement).toBeInTheDocument();
});

})
