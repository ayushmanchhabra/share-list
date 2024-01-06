import { Box } from "@mui/material";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Menu } from "components";
import { useUser } from "providers";
import { Home, List, Login } from "routes";
import { Dashboard } from "routes";

function App() {

  const { user, UserProvider } = useUser();

  return (
    <Box>
      <UserProvider>
        <Router>
          <Menu
            isAuthenticated={user.isAuthenticated}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />}>
              <Route path=":id" element={<List />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </UserProvider>
    </Box>
  );
}

const root: HTMLElement | null = document.getElementById("root");

if (root !== null) {
  createRoot(root).render(<App />);
}
