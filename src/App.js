import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Login from "./components/auth/login/Login";
const App = () => {

  const user ={
    name:"asda"
  }

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
