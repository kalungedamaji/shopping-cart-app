import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const inputAppName="Manyvar Shop";
  render(<App appName={inputAppName}/>);

  const shoppingCartHeaderElement = screen.getByRole("heading",{name:inputAppName})

  expect(shoppingCartHeaderElement).toBeInTheDocument();
});
