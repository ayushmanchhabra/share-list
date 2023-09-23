import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeAll, describe, it, expect } from "vitest";

import { Home } from "routes";

describe("Home route", () => {

  beforeAll(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
  });

  it("renders title", () => {

    screen.debug();

    expect(screen.getByTestId("title").textContent).toBe("Share List");
  });
});
