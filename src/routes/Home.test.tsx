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

    expect(screen.getByTestId("title").textContent).toBe("Share List");
  });

  it("renders subtitle", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("subtitle").textContent).toBe(
      "Share and remix music across platforms.",
    );
  });

  it("button is enabled", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("cta")).toHaveProperty("disabled", false);
  });
});
