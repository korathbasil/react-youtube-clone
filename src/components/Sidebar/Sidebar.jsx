import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions/SidebarOptions";

// Material UI elements
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarOptions icon={HomeIcon} name="Home" />
      <SidebarOptions icon={WhatshotIcon} name="Trending" />
      <SidebarOptions icon={SubscriptionsIcon} name="Subscriptions" />
    </div>
  );
}

export default Sidebar;
