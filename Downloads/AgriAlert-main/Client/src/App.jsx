// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/AdminDashboard";
import FarmerForm from "./pages/FarmerForm";
import { useState } from "react";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-green-700 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-center gap-6 text-lg font-semibold">
          <Link to="/" className="hover:text-green-200 transition">Home</Link>
          <Link to="/login" className="hover:text-green-200 transition">Login</Link>
          <Link to="/dashboard" className="hover:text-green-200 transition">Dashboard</Link>
          {/* <Link to="/register" className="hover:text-green-200 transition">Register</Link> */}
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<FarmerForm />} />
      </Routes>
    </Router>
  );
}

export default App;
