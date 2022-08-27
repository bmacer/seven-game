import { createContext, useState } from "react";

export const GameContext = createContext({
  myHand: [],
  setMyHand: () => null,
  currentUsername: null,
  setCurrentUsername: () => null,
  currentUserId: null,
  setCurrentUserId: () => null,
  currentGame: null,
  setCurrentGame: () => null,
  currentGameId: null,
  setCurrentGameId: () => null,
  numPlayers: null,
  setNumPlayers: () => null,
  dealerIndex: null,
  setDealerIndex: () => null,
  currentTurnPlayerIndex: null,
  setCurrentTurnPlayerIndex: () => null,
});

export const GameProvider = ({ children }) => {
  const [currentUsername, setCurrentUsername] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentGame, setCurrentGame] = useState(null);
  const [currentGameId, setCurrentGameId] = useState(null);
  const [numPlayers, setNumPlayers] = useState(null);
  const [myHand, setMyHand] = useState([]);
  const [dealerIndex, setDealerIndex] = useState(null);
  const [currentTurnPlayerIndex, setCurrentTurnPlayerIndex] = useState(null);
  const value = {
    currentUsername,
    setCurrentUsername,
    currentUserId,
    setCurrentUserId,
    currentGame,
    setCurrentGame,
    currentGameId,
    setCurrentGameId,
    numPlayers,
    setNumPlayers,
    myHand,
    setMyHand,
    dealerIndex,
    setDealerIndex,
    currentTurnPlayerIndex,
    setCurrentTurnPlayerIndex,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
