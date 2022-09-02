import { useContext } from "react";
import { GameContext } from "../../contexts/game.context";
import socket from "../../socket";

const ErrorMessage = () => {
  const { errorMessage, setErrorMessage } = useContext(GameContext);
  socket.on("error", (props) => {
    const { message } = props;
    setErrorMessage(message);
    console.log("error");
    console.log(props);
    // alert("errir");
  });
  return (
    <>
      {!errorMessage ? (
        <></>
      ) : (
        <div className="error-message-container">
          <h1>Violation! {errorMessage}</h1>
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
