import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Messenger from "./components/messenger/Messenger";
import "./App.css";

const App: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleFileUpload = (file: File) => {
    console.log("Uploading file:", file);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="container">
      <Sidebar activeItem={activeItem} handleItemClick={handleItemClick} />
      <Messenger onFileUpload={handleFileUpload} />
    </div>
  );
};

export default App;
