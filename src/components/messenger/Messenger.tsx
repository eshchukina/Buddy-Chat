import React, { useState, ChangeEvent } from "react";
import "./Messenger.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faPaperclip,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

interface Person {
  id: number;
  name: string;
  avatar: string;
  isOnline?: boolean;
}

interface Message {
  sender: string;
  content: string;
}

interface FileUploadButtonProps {
  onFileUpload: (file: File) => void;
}

const people: Person[] = [
  {
    id: 1,
    name: "John Doe",
    avatar:
      "https://i.pinimg.com/564x/23/67/99/23679975f9299de2b4c9123a6810e011.jpg",
    isOnline: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar:
      "https://i.pinimg.com/564x/bb/89/f9/bb89f986f42e12064ea14c195120c6bf.jpg",
    isOnline: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    avatar:
      "https://i.pinimg.com/736x/0a/71/1e/0a711e478b9809354b8110b2a2e176f1.jpg",
    isOnline: true,
  },
  {
    id: 4,
    name: "Bob Brown",
    avatar:
      "https://i.pinimg.com/564x/55/12/db/5512dba404140c9573c74337d47856c9.jpg",
    isOnline: false,
  },
];

const Messenger: React.FC<FileUploadButtonProps> = ({ onFileUpload }) => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
      setSelectedFile(null);
    } else {
      console.log("Нет выбранного файла для загрузки");
    }
  };

  const handlePersonClick = (person: Person) => {
    setSelectedPerson(person);
    setMessages([]);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { sender: "You", content: newMessage }]);
      setNewMessage("");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="messenger-container">
      <div className="people-list">
        <div className="header">
          <h2>Messenger ({people.length})</h2>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search people..."
          className="search-input"
        />
        <ul>
          {filteredPeople.map((person) => (
            <li
              key={person.id}
              onClick={() => handlePersonClick(person)}
              className={`person-item ${
                selectedPerson?.id === person.id ? "selected-person" : ""
              }`}
            >
              <img src={person.avatar} alt={person.name} className="avatar" />
              <span>{person.name}</span>
              {person.isOnline && (
                <FontAwesomeIcon icon={faCircle} className="online-indicator" />
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="chat-window">
        {selectedPerson ? (
          <div className="wrapper">
            <h3>Chat with {selectedPerson.name}</h3>
            <div className="messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${
                    msg.sender === "You" ? "sent" : "received"
                  }`}
                >
                  <strong>{msg.sender}: </strong>
                  {msg.content}
                </div>
              ))}
            </div>
            <div className="input-area">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <input
                type="file"
                id="file-upload"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {!selectedFile && (
                <button
                  className="buttonClip"
                  title="Add document"
                  onClick={() =>
                    document.getElementById("file-upload")?.click()
                  }
                >
                  <FontAwesomeIcon color={"#ee7828"} icon={faPaperclip} />
                </button>
              )}
              {selectedFile && (
                <div className="fileContainer">
                  <>
                    <p onClick={handleFileUpload}>Upload {selectedFile.name}</p>
                    <button
                      className="buttonClip"
                      title="Удалить файл"
                      onClick={() => {
                        setSelectedFile(null);
                      }}
                    >
                      <FontAwesomeIcon color={"#ee7828"} icon={faXmark} />
                    </button>
                  </>
                </div>
              )}
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        ) : (
          <div className="no-chat">
            <h2>
              Buddy Chat is a simple and user-friendly web messenger designed
              for seamless communication. Whether you're chatting with friends
              or colleagues, Buddy Chat offers a straightforward interface with
              essential features like real-time messaging, file sharing, and
              online status indicators. Stay connected effortlessly and enjoy
              smooth conversations in a clean and intuitive environment
            </h2>
          </div>
        )}
      </div>

      {selectedPerson && (
        <div className="person-info">
          <img src={selectedPerson.avatar} alt={selectedPerson.name} />
          <h3>{selectedPerson.name}</h3>
        </div>
      )}
    </div>
  );
};

export default Messenger;
