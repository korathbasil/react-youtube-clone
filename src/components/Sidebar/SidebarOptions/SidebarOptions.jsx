import React from "react";
import "./SidebarOptions.css";

function SidebarOptions(props) {
  return (
    <div className="sidebarOptions">
      <props.icon className="sidebarOptions__icon" />
      <h3 className="sidebarOptions__title">{props.name}</h3>
    </div>
  );
}

export default SidebarOptions;
