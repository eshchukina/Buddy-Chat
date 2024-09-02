import React from "react";
import "./SidebarButton.css";

interface SidebarButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  title: string;
  isActive?: boolean;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  icon,
  onClick,
  title,
  isActive
}) => {
  return (
    <button
      className={'sidebar-button'}
      onClick={onClick}
      title={title}
    >
      <span className={`icon ${isActive ? 'active' : ''}`}>{icon}</span>
    </button>
  );
};

export default SidebarButton;
