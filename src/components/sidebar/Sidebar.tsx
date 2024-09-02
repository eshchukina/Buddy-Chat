import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../assets/img/bclogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../header/Header";
import SettingsModal from "../modals/SettingsModal";
import {
  faGear,
  faPaperclip,
  faCommentDots,
  faArrowRightFromBracket,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import SidebarButton from "../button/SidebarButton";

interface SidebarProps {
  handleItemClick: (item: string) => void;
  activeItem: string;
}

const Sidebar: React.FC<SidebarProps> = ({ handleItemClick, activeItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="sidebar">
      <div style={{ marginTop: "10px" }}>
        <Header />
      </div>
      <img src={logo} alt="Logo" className="logo" />
      <SidebarButton
        icon={<FontAwesomeIcon icon={faCommentDots} />}
        title="main"
        onClick={() => handleItemClick("main")}
      />
      {/* <SidebarButton
        icon={<FontAwesomeIcon icon={faBookmark} />}
        title="favorites"
        onClick={() => handleItemClick("favorites")}
      /> */}
      <SidebarButton
        icon={<FontAwesomeIcon icon={faGear} />}
        title="settings"
        onClick={() => setIsModalOpen(true)}
      />
      <SidebarButton
        icon={<FontAwesomeIcon icon={faMobile} />}
        title="app"
        onClick={() => handleItemClick("app")}
      />
      <SidebarButton
        icon={<FontAwesomeIcon icon={faPaperclip} />}
        title="privacy policy"
        onClick={() => handleItemClick("privacy policy")}
      />
      <SidebarButton
        icon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
        title="exit"
        onClick={() => handleItemClick("exit")}
      />
      <SettingsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Sidebar;
