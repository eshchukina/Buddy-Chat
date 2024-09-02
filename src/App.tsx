import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Messenger from "./components/messenger/Messenger";
import "./App.css";

const App: React.FC = () => {
  const handleItemClick = (item: string) => {
    console.log(`Clicked on ${item}`);
  };
  const handleFileUpload = (file: File) => {
    console.log("Uploading file:", file);
  };

  return (
    <>
      <div className="container">
        <Sidebar handleItemClick={handleItemClick} />
        <Messenger onFileUpload={handleFileUpload} />
      </div>
    </>
  );
};

export default App;
