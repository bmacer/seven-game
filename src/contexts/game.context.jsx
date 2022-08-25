import { createContext, useState } from "react";

export const GameContext = createContext({
  currentUsername: null,
  setCurrentUsername: () => null,
  currentUserId: null,
  setCurrentUserId: () => null,
  currentGame: null,
  setCurrentGame: () => null,
  currentGameId: null,
  setCurrentGameId: () => null,
});

export const GameProvider = ({ children }) => {
  const [currentUsername, setCurrentUsername] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentGame, setCurrentGame] = useState(null);
  const [currentGameId, setCurrentGameId] = useState(null);
  const value = {
    currentUsername,
    setCurrentUsername,
    currentUserId,
    setCurrentUserId,
    currentGame,
    setCurrentGame,
    currentGameId,
    setCurrentGameId,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
