import io from "socket.io-client";

const SERVER = "http://127.0.0.1:5002";

const connectionOptions = {
  forceNew: true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

let socket = io.connect(SERVER, connectionOptions);

export default socket;
