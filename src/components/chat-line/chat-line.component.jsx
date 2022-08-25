import "./chat-line.styles.scss";

const ChatLine = ({ message }) => {
  const { msg, sender, isMine } = message;
  return (
    <div className={isMine ? "chat-line my-chat" : "chat-line"}>
      <h3>
        {sender}: {msg}
      </h3>
    </div>
  );
};

export default ChatLine;
