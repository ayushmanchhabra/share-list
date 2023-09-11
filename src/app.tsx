import { Route, HashRouter as Router, Routes } from "react-router-dom";

import { List } from "routes";

export function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:id" element={<List />} />
      </Routes>
    </Router>
  );
}