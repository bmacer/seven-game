import { useContext } from "react";
import { GameContext } from "../../contexts/game.context";

const CurrentGame = ({ game }) => {
  const { currentUsername, currentGameId, currentGame } =
    useContext(GameContext);
  return (
    <div>
      <h2>Username: {currentUsername}</h2>
      <h2>Game ID: {currentGameId}</h2>
      <>
        {currentGame?.players ? (
          <h2>Players in game ({currentGame.players.length}):</h2>
        ) : (
          <></>
        )}
      </>
      {currentGame?.players?.map((player) => {
        return <h3>Player: {player.playerName}</h3>;
      })}
    </div>
  );
};

export default CurrentGame;
