import { useState, useContext } from "react";

import { GameContext } from "../../contexts/game.context";

const NameEntry = () => {
  const { currentUsername, setCurrentUsername } = useContext(GameContext);
  const [user, setUsername] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleClick = () => {
    console.log("clicked");
    setCurrentUsername(user);
  };

  return (
    <div>
      <h2>Enter Name</h2>
      <form>
        <input
          name="username"
          value={user}
          onChange={handleUsernameChange}
        ></input>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
};

export default NameEntry;
