import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { Menu } from "components";

import { TITLE } from "./Menu.content.ts";

describe("Home route", () => {
  let unmountMenu: () => void = () => { };

  beforeEach(() => {
    const { unmount } = render(
      <MemoryRouter>
        <Menu
          isAuthenticated={false}
        />
      </MemoryRouter>,
    );

    unmountMenu = unmount;
  });

  it("renders title", () => {
    expect(screen.getByTestId("title").textContent).toBe(TITLE);
  });

  it("checks if login button is not disabled", () => {
    expect(screen.getByTestId("button")).not.toBeDisabled();
  })

  afterEach(() => {
    unmountMenu();
  });
});
