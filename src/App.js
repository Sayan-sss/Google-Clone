import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Search from "./Search";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/search' element={<SearchPage />} />
          <Route path='/' element={<Home />} />
        </Routes>
        {/* Search */}
      </BrowserRouter>
    </div>
  );
}

export default App;
