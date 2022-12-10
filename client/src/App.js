import React from "react";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Registration from "./pages/Registration/Registration";
import Sidebar from "./layouts/Sidebar";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashProfile from "./pages/DashProfile";
import DashProject from "./DashProject";
import DashProgressBar from "./DashProgressBar";

function App() {
  return (
    <div className="App bg-gray-50">
      {/* <Navbar /> */}
      <Sidebar />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Registration />
      <Dashboard />
      <DashProfile />
      <DashProject />
      <DashProgressBar />
    </div>
  );
}

export default App;
