import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage.jsx";
import Presentation from "./Presentation.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/presentation" element={<Presentation />} />
      </Routes>
    </>
  );
}

export default App;
