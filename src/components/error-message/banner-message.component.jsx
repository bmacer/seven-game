import { useContext } from "react";
import { GameContext } from "../../contexts/game.context";
import socket from "../../socket";

const BannerMessage = () => {
  const { bannerMessage, setBannerMessage } = useContext(GameContext);
  socket.on("error", (props) => {
    const { message, messageType } = props;
    setBannerMessage(message);
    console.log("error");
    console.log(props);
    // alert("errir");
  });
  return (
    <>
      {!bannerMessage ? (
        <></>
      ) : (
        <div className="error-message-container">
          <h1>{bannerMessage}</h1>
        </div>
      )}
    </>
  );
};

export default BannerMessage;
