import "./App.css";
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Matching from "./pages/Matching";
// import Editor from "./pages/Editor";

import RouteTest from "./RouteTest";

function App() {
  return (
    <div className="App">
      <RouteTest />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Matching" element={<Matching />} />
        {/* <Route path="/Editor" element={<Editor />} /> */}
      </Routes>
    </div>
  );
}

export default App;
