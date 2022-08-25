import io from "socket.io-client";

let SERVER;

if (window.location.hostname === "localhost") {
  SERVER = "http://127.0.0.1:5002";
  // SERVER = "https://seven-app-server.herokuapp.com";
} else {
  SERVER = "https://seven-app-server.herokuapp.com";
}

const connectionOptions = {
  forceNew: true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

console.log(`Server: ${SERVER}`);
let socket = io.connect(SERVER, connectionOptions);

export default socket;
