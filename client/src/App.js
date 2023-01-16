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
import SubSidebar from "./layouts/SubSidebar";
import Users from "./pages/Users/Users";
import Projects from "./pages/Projects/Projects";
import Pricing from "./pages/Pricing/Pricing";
import Invoice from "./pages/Invoice/Invoice";
import TeamsDashboard from "./pages/Teams/TeamsDashboard";

function App() {
  return (
    <div className="App">
      <SubSidebar />
      {/* <Sidebar /> */}
      <div className="navbar-margin">
        <Navbar />
        <div className="content-margin">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashProfile" element={<DashProfile />} />
            <Route path="/dashproject" element={<DashProject />} />

            <Route path="/teamprofile" element={<TeamProfile />} />
            <Route path="/teams" element={<TeamsDashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/invoice" element={<Invoice />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
