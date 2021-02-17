import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
const App = () => {
  const navigation = useNavigate();

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
