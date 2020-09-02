import React from "react";
import "./Header.css";
import YTLogo from "../../images/YT-logo.png";

// Material UI Elements

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="header">
      <div className="header__logoContainer">
        <MenuIcon className="header__MenuIcon" />
        <img src={YTLogo} alt="" className="header__logo" />
      </div>
      <div className="header__searchContainer">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search"
        />
        <div className="header__searchButtonContainer">
          <SearchIcon />
        </div>
      </div>
      <div className="header__accountOptionsContainer">
        <VideoCallIcon className="header__accountOptionsIcon" />
        <AppsIcon className="header__accountOptionsIcon" />
        <NotificationsIcon className="header__accountOptionsIcon" />
        <Avatar className="header__accountOptionsAvatar" />
      </div>
    </div>
  );
}

export default Header;
