import { useContext } from "react";
import { GameContext } from "../../contexts/game.context";
import "./seating.styles.scss";

const Seating = () => {
  const { currentGame } = useContext(GameContext);
  return (
    <div className="seating-container">
      <h1>Waiting for your friends to take their seats!</h1>
      <h1>Share your room code!</h1>
      <h1>Room code: ${currentGame.id}</h1>
    </div>
  );
};

export default Seating;
