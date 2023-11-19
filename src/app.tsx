import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home, List, Login, Main } from "routes";
import { useUser } from "providers";

export function App() {

  const { UserProvider } = useUser();

  return (
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
  );
}
