import React from "react";
import Align from "./components/align";
import Justify from "./components/justify";
import Direction from "./components/direction";
import Wrap from "./components/wrap";
import Boxes from "./components/boxes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="properties">
        <Align />
        <Justify />
        <Direction />
        <Wrap />
      </div>

      <Boxes className="boxes" />
    </div>
  );
}

export default App;
