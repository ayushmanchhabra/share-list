import { Box } from "@mui/material";
import { Menu } from "components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


import { Home, List } from "routes";

export function App() {
  return (
    <Box>
      <Menu
        isAuthenticated={false}
        handleLogin={() => {}}
        handleLogout={() => {}}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />}>
            <Route path=":id" element={<List />} />
          </Route>
        </Routes>
      </Router>
    </Box>
  );
}
