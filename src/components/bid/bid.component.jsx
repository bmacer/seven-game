import { useContext } from "react";

import { GameContext } from "../../contexts/game.context";

const Bid = () => {
  const { myHand, dealerIndex, currentTurnPlayerIndex } =
    useContext(GameContext);
  const options = [];

  for (let i = 0; i <= myHand.length; i++) {
    options.push(<button>{i}</button>);
  }

  return (
    <div>
      <h1>Bid</h1>
      <div>{options}</div>
      <div>dealer index: {dealerIndex}</div>
      <div>current turn: {currentTurnPlayerIndex}</div>
    </div>
  );
};

export default Bid;
