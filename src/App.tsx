import { useState } from "react";
import "./App.css";

function App() {
  const [pegs, setPegs] = useState([[0, 1, 2], [], []]);
  return (
    <div className="pegs-container">
      {pegs?.map((peg) => (
        <div className="peg">
          <div className="stand" />
          <div className="disc-container">
            {peg.map((disc) => (
              <span
                className="disc"
                style={{ width: 50 + 25 * disc + "px" }}
              ></span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
