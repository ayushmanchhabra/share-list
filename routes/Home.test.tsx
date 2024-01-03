import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { Home } from "routes";

import { TITLE, SUBTITLE, CONTENT } from "./Home.content.ts";

describe("Home route", () => {
  let unmountHome: () => void = () => {};

  beforeEach(() => {
    const { unmount } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    unmountHome = unmount;
  });

  it("renders title", () => {
    expect(screen.getByTestId("title").textContent).toBe(TITLE);
  });

  it("renders subtitle", () => {
    expect(screen.getByTestId("subtitle").textContent).toBe(SUBTITLE);
  });

  it("renders call to action", () => {
    expect(screen.getByTestId("content").textContent).toBe(CONTENT);
  });

  afterEach(() => {
    unmountHome();
  });
});
