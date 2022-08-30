import { useContext } from "react";

import NameEntry from "../components/name-entry/name-entry.component";
import CreateGame from "../components/create-game/create-game.component";
import JoinGame from "../components/join-game/join-game.component";

import { GameContext } from "../contexts/game.context";

const Home = () => {
  const { currentUsername } = useContext(GameContext);

  return (
    <div>
      {!currentUsername && <NameEntry />}
      {currentUsername && (
        <div>
          <CreateGame />
          <JoinGame />
        </div>
      )}
    </div>
  );
};

export default Home;
