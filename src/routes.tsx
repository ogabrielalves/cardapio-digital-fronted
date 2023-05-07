import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Menu } from "./pages/Menu";

function RoutesPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default RoutesPage;
