import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";

import { Home } from "routes";

describe("Home route", () => {
  it("renders title", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    screen.debug();

    expect(screen.getByTestId("title").textContent).toBe("Share List");
  });
});
