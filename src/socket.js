import io from "socket.io-client";

if (window.location.hostname === "localhost") {
  SERVER = "http://127.0.0.1:5002";
} else {
  SERVER = "https://seven-app-server.herokuapp.com/";
}

const connectionOptions = {
  forceNew: true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

let socket = io.connect(SERVER, connectionOptions);

export default socket;
