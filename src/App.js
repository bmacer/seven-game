import { useState, useContext } from "react";
import "./App.css";

import ChatWindow from "./components/chat-window/chat-window.component";
import NameEntry from "./components/name-entry/name-entry.component";
import JoinGame from "./components/join-game/join-game.component";

import { UserProvider } from "./contexts/user.context";
import { UserContext } from "./contexts/user.context";
import socket from "./socket";

const Home = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [user, setUsername] = useState("");
  const [currentGame, setCurrentGame] = useState("");
  // const handleNameChange = (name) => {
  //   setUsername(name);
  // };
  return (
    <div>
      {!user ? (
        <NameEntry onNameChange={(name) => setUsername(name)} />
      ) : (
        <>
          {!currentGame ? (
            <JoinGame
              name={user}
              onGameChange={(game) => setCurrentGame(game)}
            />
          ) : (
            <ChatWindow user={user} />
          )}
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Home />
      </UserProvider>
    </div>
  );
}

export default App;
