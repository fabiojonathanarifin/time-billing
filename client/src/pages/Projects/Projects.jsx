import React from "react";
import "./Projects.css";
import Project from "./Project";

function Projects() {
  return (
    <div className="mt-12 w-3/4 mx-auto">
      <div className="invoice-bar py-2.5 px-6 text-gray-600">
        <div>Client</div>
        <div>Hours Spent</div>
        <div>Budget</div>
        <div>Spent</div>
        <div>Budget Remaining</div>
        <div>Expenses</div>
      </div>
      <div className="grid gap-y-3">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Projects;
