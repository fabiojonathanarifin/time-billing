import React from "react";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Registration from "./pages/Registration/Registration";
import Sidebar from "./layouts/Sidebar";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashProfile from "./pages/UserProfile/DashProfile";
import DashProject from "./DashProject";
import DashProgressBar from "./DashProgressBar";
import TeamProfile from "./pages/TeamProfile/TeamProfile";

function App() {
  return (
    <div className="App bg-gray-100">
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
      <TeamProfile />
    </div>
  );
}

export default App;
