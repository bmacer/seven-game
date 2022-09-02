import "./played-hand.styles.scss";
import { useContext } from "react";
import { GameContext } from "../../contexts/game.context";
import Card from "../card/card.component";

const PlayedHand = () => {
  const { currentGame } = useContext(GameContext);
  console.log(currentGame);
  console.log(currentGame.round);
  //   currentGame.round.plays.forEach((play) => {
  //     console.log("okkk");
  //   });
  return (
    <div className="played-hands-container">
      <>{currentGame.round && <h1>Played Hands:</h1>}</>
      <>
        {currentGame &&
          currentGame.round &&
          currentGame?.round?.plays?.map((card) => {
            return <Card card={card} />;
          })}
      </>
    </div>
  );
};

export default PlayedHand;
