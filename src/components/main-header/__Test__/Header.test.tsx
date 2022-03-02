import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

const inputHomePageName = "Team 1 Mega Mart";

const MockHeader: React.FC = () => {
  return (
    <BrowserRouter>
      <Header homePageName={inputHomePageName} />
    </BrowserRouter>
  );
};

it("should render the homepage name", () => {
  render(<MockHeader />);

  const shoppingCartHeaderElement = screen.getByRole("heading", {
    name: "Team 1 Mega Mart",
  });

  expect(shoppingCartHeaderElement).toBeInTheDocument();
});

it("should render the view cart button", () => {
  const inputHomePageName = "Team 1 Mega Mart";
  render(<MockHeader />);

  const shoppingCartButtonElement = screen.getByRole("button", {
    name: "View Cart",
  });

  expect(shoppingCartButtonElement).toBeInTheDocument();
});
