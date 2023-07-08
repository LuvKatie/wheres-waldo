import React from "react";
import "@testing-library/jest-dom";
// import { act } from "react-test-renderer";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App / Main components", () => {
  it("Render image container and image", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const imageContainer = screen.getByRole("main", {
      name: "image-container",
    });
    const pokemonImage = screen.getByRole("img", { name: "pokemon-waldo" });

    expect(imageContainer).toBeInTheDocument();
    expect(pokemonImage).toBeInTheDocument();
  });

  it("Render Navbar character sprite images and title", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const navbar = screen.getByRole("navigation");
    const mewSprite = screen.getByRole("img", { name: "mew-sprite" });
    const ponytaSprite = screen.getByRole("img", { name: "ponyta-sprite" });
    const eeveeeSprite = screen.getByRole("img", { name: "eevee-sprite" });
    const abraSprite = screen.getByRole("img", { name: "abra-sprite" });
    const title = screen.getByLabelText("app-title");

    expect(navbar).toBeInTheDocument();
    expect(navbar).toContainElement(mewSprite);
    expect(navbar).toContainElement(ponytaSprite);
    expect(navbar).toContainElement(eeveeeSprite);
    expect(navbar).toContainElement(abraSprite);
    expect(navbar).toContainElement(title);
  });

  it("Render High Score leaderboard", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const leaderboard = screen.getByRole("region", { name: "leaderboard" });
    const boardChildren = screen.getByLabelText("board-list");

    expect(leaderboard).toBeInTheDocument();
    expect(boardChildren.childNodes.length).toEqual(10);
  });
});
