import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";

import { Login } from "routes";

describe("Login route", () => {
  if (import.meta.env.VITE_ENABLE_APPLE_MUSIC === "1") {
    it("renders login via apple button", async () => {
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>,
      );

      const button: HTMLButtonElement = screen.getByTestId("login-apple");

      expect(button.disabled).toBe(false);
    });
  }

  if (import.meta.env.VITE_ENABLE_SPOTIFY_MUSIC === "1") {
    it("renders login via spotify button", async () => {
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>,
      );

      const button: HTMLButtonElement = screen.getByTestId("login-spotify");

      expect(button.disabled).toBe(false);
    });
  }

  if (import.meta.env.VITE_ENABLE_APPLE_MUSIC === "1") {
    it("renders login via youtube music button", async () => {
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>,
      );

      const button: HTMLButtonElement = screen.getByTestId("login-youtube");

      expect(button.disabled).toBe(false);
    });
  }
});
