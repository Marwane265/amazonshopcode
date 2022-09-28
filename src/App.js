import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../amazonshop/src/Home";
import Header from "./Header";
import Checkout from "../../amazonshop/src/Checkout";
import Login from "../../amazonshop/src/Login";
function App() {
  return (
    <div className="app"> 
      <Router>
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="checkout" element={[<Header />, <Checkout />]} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
