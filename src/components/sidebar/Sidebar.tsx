import React from "react";
import "./Sidebar.css";
import logo from "../../assets/img/bclogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../header/Header";
import {
  faGear,
  faPaperclip,
  faCommentDots,
  faArrowRightFromBracket,
  faMobile,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import SidebarButton from "../button/SidebarButton";

interface SidebarProps {
  handleItemClick: any;
}

const Sidebar: React.FC<SidebarProps> = ({ handleItemClick }) => {
  return (
    <div className="sidebar">
      <div style={{ marginTop: "10px" }}>
        <Header />
      </div>
      <img src={logo} alt="Logo" className="logo" />
      <SidebarButton
        icon={<FontAwesomeIcon icon={faCommentDots} />}
        title="main"
        onClick={handleItemClick}
      />
      <SidebarButton
        icon={<FontAwesomeIcon icon={faBookmark} />}
        onClick={handleItemClick}
        title="favorites"
      />
      <SidebarButton
        icon={<FontAwesomeIcon icon={faGear} />}
        title="settings"
        onClick={handleItemClick}
      />
      <SidebarButton
        icon={<FontAwesomeIcon icon={faMobile} />}
        title="app"
        onClick={handleItemClick}
      />

      <SidebarButton
        icon={<FontAwesomeIcon icon={faPaperclip} />}
        title="privacy policy"
        onClick={handleItemClick}
      />

      <SidebarButton
        icon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
        title="exit"
        onClick={handleItemClick}
      />
    </div>
  );
};

export default Sidebar;
