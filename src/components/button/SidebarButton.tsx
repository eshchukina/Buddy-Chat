import React from "react";
import "./SidebarButton.css";

interface SidebarButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  title: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  icon,
  onClick,
  title,
}) => {
  return (
    <button className="sidebar-button" onClick={onClick} title={title}>
      <span className="icon">{icon}</span>
    </button>
  );
};

export default SidebarButton;
