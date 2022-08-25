import { useState, useEffect } from "react";
import socket from "../../socket";

import "./chat-window.styles.scss";

import ChatLine from "../chat-line/chat-line.component";
import ScrollToBottom from "react-scroll-to-bottom";

const scrollToBottom = (id) => {
  let obj = document.getElementById(id);
  setTimeout(() => {
    obj.scrollTop = obj.scrollHeight;
  }, 10);
};

const ChatWindow = ({ user }) => {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState(user);

  const handleMessageChange = (event) => {
    setMsg(event.target.value);
  };

  const submit_message_callback = () => {
    setMessages((prev) => {
      return [...prev, { msg, sender: username, isMine: true }];
    });
    scrollToBottom("chat-window");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit(
      "send-message",
      { msg: msg, sender: username },
      submit_message_callback
    );
  };

  useEffect(() => {
    socket.on("connection", null);
    socket.on("msg", (payload) => {
      const { msg, sender } = payload;
      setMessages((prev) => {
        return [...prev, { msg, sender }];
      });
      scrollToBottom("chat-window");
    });
    return function cleanup() {
      socket.removeListener("msg");
    };
  }, []);

  return (
    <div id="full-chat-window" className="full-chat-window">
      <div className="chat-title">
        <p class="left">Chat</p>
        <p class="right">Minimize</p>
      </div>
      <div className="chat-window" id="chat-window">
        {messages.map((msg) => {
          return <ChatLine message={msg} />;
        })}
      </div>
      <form
        id="chat-window-form"
        class="chat-window-form"
        onSubmit={handleSubmit}
      >
        <input
          value={msg}
          onChange={handleMessageChange}
          placeholder="Say Something..."
        ></input>
        {/* <button class="chat-window-button" type="submit">
          Send Message
        </button> */}
      </form>
    </div>
  );
};

export default ChatWindow;
