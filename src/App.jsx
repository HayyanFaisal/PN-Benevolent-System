import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ParentDashboard from "./pages/Parent/ParentDashboard";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/parent" element={<ParentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
