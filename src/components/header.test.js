import "@testing-library/jest-dom";
// import { act } from "react-test-renderer";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("Header component functionality", () => {
  it("Score timer increments every second when user clicks Start", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const startGame = screen.getByRole("button", { name: "start-game" });
    await user.click(startGame);
    const scoreTimer = await screen.findByTestId("highscore-timer");
    await waitFor(() => {
      expect(scoreTimer).toHaveTextContent(0);
    });

    await waitFor(() => {
      expect(scoreTimer).toHaveTextContent(1);
    });
  });
});
