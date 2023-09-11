import { createRoot } from "react-dom/client";

import { App } from "./app";

const root: HTMLElement | null = document.getElementById("root");

if (root !== null) {
  createRoot(root).render(<App />);
}
