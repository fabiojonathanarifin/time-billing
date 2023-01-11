import React from "react";

function SidebarComponents(props) {
  return (
    <div className="wide-bar-items space-x-2 flex items-center">
      <HomeIcon className="wide-bar-icon" />
      <div>{props.name}</div>
    </div>
  );
}

export default SidebarComponents;
