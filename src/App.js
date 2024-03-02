import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Soda from "./Soda";
import Water from "./Water";
import Juice from "./Juice";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/water" element={<Water />} />
        <Route path="/juice" element={<Juice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
