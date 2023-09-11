import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home, List } from "routes";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} >
          <Route path=":id" element={<List />} />
        </Route>
      </Routes>
    </Router>
  );
}