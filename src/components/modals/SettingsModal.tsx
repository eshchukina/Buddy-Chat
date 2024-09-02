import React, { useState } from "react";
import "./SettingsModal.css";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [language, setLanguage] = useState<string>("en");

  if (!isOpen) return null;

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="settings-modal-overlay">
      <div className="settings-modal">
        <h2>Settings</h2>
        <div className="settings-section">
          <label htmlFor="language-select">Select Language:</label>
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </select>
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;
