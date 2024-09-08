import { useState } from "react";
import "./App.css";

import PlayersList from "./components/PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Football Players
      </h1>
      <PlayersList />
    </div>
  );
}

export default App;
