import React from 'react';
import App from './App';
import { render,screen } from '@testing-library/react';

describe("should render home page", () => {

it('should render title of the home page', () => {
  const inputAppName="Manyvar Shop";
  render(<App appName={inputAppName}/>);

  const shoppingCartHeaderElement = screen.getByRole("heading",{name:inputAppName})

  expect(shoppingCartHeaderElement).toBeInTheDocument();
});

it('should render view cart button of the home page', () => {
  const inputAppName="Manyvar Shop";
  render(<App appName={inputAppName}/>);

  const shoppingCartButtonElement = screen.getByRole("button",{name:"View Cart"})

  expect(shoppingCartButtonElement).toBeInTheDocument();
});
})
