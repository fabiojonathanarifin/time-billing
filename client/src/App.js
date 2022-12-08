import React from "react";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Sidebar />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      {/* <div className="contentmargin border-2 border-black md:container sm:mx-auto">
        <h1>Doom</h1>
      </div> */}
    </div>
  );
}

export default App;
