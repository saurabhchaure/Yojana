// import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/hoemPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage}></Route>
      </Routes>
    </Router>
  );
}

export default App;
