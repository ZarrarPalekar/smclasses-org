import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
