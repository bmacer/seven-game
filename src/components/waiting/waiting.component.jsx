import { useContext } from "react";
import { GameContext } from "../../contexts/game.context";
import "./waiting.styles.scss";

const Waiting = () => {
  const { currentGame } = useContext(GameContext);

  const formatStatement = () => {
    let statement = `Waiting for Player #${
      currentGame.currentTurnOfPlayer + 1
    } to `;
    switch (currentGame.state) {
      case "Bidding":
        statement += "bid";
        break;
      case "Playing":
        statement += "play";
        break;
    }
    return statement;
  };

  return (
    <div className="waiting-container">
      <h3>statement:</h3>
      <h3>{formatStatement()}</h3>
    </div>
  );
};

export default Waiting;
