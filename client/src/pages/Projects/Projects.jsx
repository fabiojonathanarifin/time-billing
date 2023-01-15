import React from "react";
import "./Projects.css";
import Project from "./Project";

function Projects() {
  return (
    <div className="mt-12 w-10/12 mx-auto">
      <div className="project-bar py-2.5 px-6 text-gray-600 text-light">
        <div>
          <div>Client</div>
        </div>
        <div className="project-content">
          <div>Hours Spent</div>
          <div>Budget</div>
          <div>Spent</div>
          <div>Budget left</div>
          <div>Expenses</div>
        </div>
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
