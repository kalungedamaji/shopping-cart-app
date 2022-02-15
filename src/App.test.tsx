import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("shopping cart stories",()=>{
it('renders learn react link', () => {
  const inputAppName="Manyvar Shop";
  render(<App appName={inputAppName}/>);

  const shoppingCartHeaderElement = screen.getByRole("heading",{name:inputAppName})

  expect(shoppingCartHeaderElement).toBeInTheDocument();
});

it.only('should display product name', () => {
  render(<App appName={'inputAppName'} />);
  const nameElement = screen.getByText(/Laptop Bagpack/);
  expect(nameElement).toBeInTheDocument();
});
});