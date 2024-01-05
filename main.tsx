import { Box } from "@mui/material";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Menu } from "components";
import { Home, List, Login } from "routes";

function App() {
  return (
    <Box>
      <Router>
        <Menu
          isAuthenticated={false}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />}>
            <Route path=":id" element={<List />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Box>
  );
}

const root: HTMLElement | null = document.getElementById("root");

if (root !== null) {
  createRoot(root).render(<App />);
}
