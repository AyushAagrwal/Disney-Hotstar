import React from "react";

import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./Style/login.css";
import "./Style/header.css";
import "./Style/home.css";
import "./Style/home_menu.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
