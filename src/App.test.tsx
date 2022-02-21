import React from 'react';
import App from './App';
import { render,screen } from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";

test('renders title of the page', () => {
  const inputAppName="Manyvar Shop";
  render(<BrowserRouter>
    <App appName={inputAppName}/>
  </BrowserRouter>);

  const shoppingCartHeaderElement = screen.getByRole("heading",{name:inputAppName})

  expect(shoppingCartHeaderElement).toBeInTheDocument();
});

test('renders Cart navigator', () => {
  const inputAppName="Manyvar Shop";
  render(<BrowserRouter>
    <App appName={inputAppName}/>
  </BrowserRouter>);

  expect(screen.getByRole('link' , { name: 'Cart button' })).toHaveAttribute('href', '/CartPage');
});

test('renders Store navigator', () => {
  const inputAppName="Manyvar Shop";
  render(<BrowserRouter>
    <App appName={inputAppName}/>
  </BrowserRouter>);

  expect(screen.getByRole('link' , { name: 'store button' })).toHaveAttribute('href', '/');
});
