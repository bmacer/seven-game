import { useState } from "react";
import "./App.css";

import ChatWindow from "./components/chat-window/chat-window.component";
import NameEntry from "./components/name-entry/name-entry.component";

function App() {
  const [user, setUsername] = useState("");
  const handleNameChange = (name) => {
    console.log("handling...");
    console.log(name);
    setUsername(name);
    console.log(user);
  };
  return (
    <div className="App">
      {user ? (
        <ChatWindow user={user} />
      ) : (
        <NameEntry onNameChange={handleNameChange} />
      )}
    </div>
  );
}

export default App;
