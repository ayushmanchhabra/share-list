import { Box } from "@mui/material";
import { Menu } from "components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home, List, Login } from "routes";

export function App() {
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
