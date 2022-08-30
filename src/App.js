import "./App.css";

import Home from "./routes/home.route";
import { Routes, Route } from "react-router-dom";

import GameRoute from "./routes/game.route";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<GameRoute />} />
        {/* </Route> */}
        {/* <Route exact path="/" element={<Home />}></Route>
        <Route path="/:id" element={<GameRoute />} /> */}
      </Routes>
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
