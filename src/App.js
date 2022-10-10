import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
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
