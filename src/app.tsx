import { Box } from "@mui/material";
import { useNavigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Menu } from "components";
import { Home, List, Login, Main } from "routes";
import { useUser } from "providers";

export function App() {

  const navigate = useNavigate();

  const { UserProvider } = useUser();

  function handleLogin() {
    return navigate("/login");
  }

  function handleLogout () {

  }

  return (
    <Box>
      <Menu
        isAuthenticated={false}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/list" element={<List />}>
              <Route path=":id" element={<List />} />
            </Route>
            <Route path="/main" element={<Main />} />
          </Routes>
        </Router>
      </UserProvider>
    </Box>
  );
}
