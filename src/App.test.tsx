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

it('should display product name', () => {
  render(<App appName={'inputAppName'} />);
  const nameElement = screen.getByRole('heading',{name:"Laptop Bagpack"});
  expect(nameElement).toBeInTheDocument();
});

it('should display product description', () => {
  render(<App appName={'inputAppName'} />);
  const descriptionElement = screen.getByText(/A Blue coloured leather bag with capacity of 15l/i);
  expect(descriptionElement).toBeInTheDocument();
});

it('should display product price', () => {
  render(<App appName={'inputAppName'} />);
  const priceElement = screen.getByRole('heading', {name:"INR.5000"});
  expect(priceElement).toBeInTheDocument();
});

// it('should display product image', () => {
//   render(<App appName={'inputAppName'} />);
//   const imageElement = screen.getByRole('img');
//   expect(imageElement).toHaveAttribute('src','https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')
// });

it('should display second product name', () => {
  render(<App appName={'inputAppName'} />);
  const nameElement = screen.getByRole('heading',{name:"T-Shirt"});
  expect(nameElement).toBeInTheDocument();
});

it('should display second product description', () => {
  render(<App appName={'inputAppName'} />);
  const descriptionElement = screen.getByText(/Men's T-Shirt, Cotton, Round Neck, White Colour/i);
  expect(descriptionElement).toBeInTheDocument();
});

it('should display second product price', () => {
  render(<App appName={'inputAppName'} />);
  const priceElement = screen.getByRole('heading', {name:"INR.1200"});
  expect(priceElement).toBeInTheDocument();
});

});