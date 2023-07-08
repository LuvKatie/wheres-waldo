import "@testing-library/jest-dom";
import { act } from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("WaldoImage component functionality", () => {
  it("Image container contains a start game button", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const startGame = screen.getByRole("button", { name: "start-game" });

    expect(startGame).toBeInTheDocument();
  });

  it("Waldo image cover is displayed until Start Game button gets clicked", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const imageCover = screen.getByTestId("image-cover");

    expect(imageCover).toHaveClass("cover");

    const startGame = screen.getByRole("button", { name: "start-game" });
    await act(async () => {
      await user.click(startGame);
    });

    expect(imageCover).not.toHaveClass("cover");
    expect(imageCover).toHaveClass("uncover");
  });

  it.skip("When clicking image show sprite options", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const imageContainer = screen.getByRole("main", {
      name: "image-container",
    });
    const spriteMenu = screen.getByTestId("sprite-menu");

    expect(spriteMenu).toHaveClass("hideSprites");
    await user.click(imageContainer);
    expect(spriteMenu).toHaveClass("showSprites");
  });
});
