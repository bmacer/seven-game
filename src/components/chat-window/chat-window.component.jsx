import { useState, useEffect, useContext } from "react";
import socket from "../../socket";

import "./chat-window.styles.scss";

import ChatLine from "../chat-line/chat-line.component";

import { GameContext } from "../../contexts/game.context";

const scrollToBottom = (id) => {
  let obj = document.getElementById(id);
  setTimeout(() => {
    obj.scrollTop = obj.scrollHeight;
  }, 10);
};

const ChatWindow = ({ user }) => {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const { currentUsername } = useContext(GameContext);

  const handleMessageChange = (event) => {
    setMsg(event.target.value);
  };

  const submit_message_callback = () => {
    setMessages((prev) => {
      return [...prev, { msg, sender: currentUsername, isMine: true }];
    });
    scrollToBottom("chat-window");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit(
      "send-message",
      { msg: msg, sender: currentUsername },
      submit_message_callback
    );
    setMsg("");
    document.getElementsByClassName("chat-window")[0].removeAttribute("hidden");
  };

  useEffect(() => {
    socket.on("connection", null);
    socket.on("msg", (payload) => {
      console.log("RECEIVING MESSAGE");
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

  const handleMinimizeMaximize = (event) => {
    console.log("clickeD");
    document.getElementsByClassName("chat-window")[0].toggleAttribute("hidden");
    document
      .getElementsByClassName("chat-min-max")[0]
      .toggleAttribute("hidden");
    document
      .getElementsByClassName("chat-min-max")[1]
      .toggleAttribute("hidden");
  };

  const handleMessageSend = () => {
    console.log("sent");
  };

  return (
    <div id="full-chat-window" className="full-chat-window">
      {" "}
      <div className="chat-window" id="chat-window">
        {messages.map((msg) => {
          return <ChatLine message={msg} />;
        })}
      </div>
      <div className="chat-title">
        <p className="left">Chat</p>
        <p className="right chat-min-max" onClick={handleMinimizeMaximize}>
          Maximize
        </p>
        <p
          className="right chat-min-max"
          onClick={handleMinimizeMaximize}
          hidden
        >
          Minimize
        </p>
      </div>
      <form
        id="chat-window-form"
        className="chat-window-form"
        onSubmit={handleSubmit}
      >
        <input
          id="say-something"
          value={msg}
          onChange={handleMessageChange}
          placeholder="Say Something..."
        ></input>
      </form>
    </div>
  );
};

export default ChatWindow;
