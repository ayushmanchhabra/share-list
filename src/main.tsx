import { createRoot } from "react-dom/client";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

import { App } from "./app";

const root: HTMLElement | null = document.getElementById("root");

if (root !== null) {
  createRoot(root).render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<App />} />
      </Routes>
    </Router>
  );
}
