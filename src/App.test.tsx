import React from 'react';
import App from './App';
import { render,screen } from '@testing-library/react';

test('renders title of the page', () => {
  const inputAppName="Manyvar Shop";
  render(<App appName={inputAppName}/>);

  const shoppingCartHeaderElement = screen.getByRole("heading",{name:inputAppName})

  expect(shoppingCartHeaderElement).toBeInTheDocument();
});
test('renders Shopping cart navigation button', () => {
  const inputAppName="Manyvar Shop";
  render(<App appName={inputAppName}/>);

  const shoppingCartHeaderElement = screen.getByRole("heading",{name:inputAppName})

  expect(shoppingCartHeaderElement).toBeInTheDocument();
});
