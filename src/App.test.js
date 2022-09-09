import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

describe("App testing", () => {
    test("Heading appears", () => {
        
        render(<App />);
        let title = screen.getByLabelText(
            "Welcome to our tantalising Thai takeout !"
        );
        expect(title).toBeInTheDocument();
    });
    test("Menu link appears", () => {
        render(<App />);
        let MenuLink = screen.getByText("Menu");
        expect(MenuLink).toBeInTheDocument();
    });
    test("Menu link works", async () => {
        // const user = userEvent.setup()
        let history = createMemoryHistory();
        history.push = jest.fn();
        render(
            <MemoryRouter location = {history.location} navigator={history}>
                <App />
            </MemoryRouter>
        );
        let MenuLink = screen.getByText("Menu");
        await userEvent.click(MenuLink)
        expect(history.push).toHaveBeenCalledWith("/menu")
        /* renderWithRouter(<App/>) */
    });
    test("Basket link appears", () => {
        render(<App />);
        let Basket = screen.getByLabelText("Basket");
        expect(Basket).toBeInTheDocument();
    });
});
