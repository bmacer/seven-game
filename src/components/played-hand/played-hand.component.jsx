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
    <div>
      <h1>Played Hands:</h1>
      <>
        {currentGame &&
          currentGame.round &&
          currentGame?.round?.plays?.map((card) => {
            //   if (!play) {
            //     return <img src="../../assets/CardImages/png/blank.png" />;
            //   }
            return <Card card={card} />;
            //   return <h2>{JSON.stringify(card)}</h2>;
          })}
      </>
      {/* })} */}
    </div>
  );
};

export default PlayedHand;
