import { useState } from "react";

const NameEntry = ({ onNameChange }) => {
  const [user, setUsername] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleClick = () => {
    onNameChange(user);
  };

  return (
    <div>
      <h2>Enter Name</h2>
      <input
        name="username"
        value={user}
        onChange={handleUsernameChange}
      ></input>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default NameEntry;
