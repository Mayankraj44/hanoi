import { useState } from "react";
import "./App.css";

function App() {
  const [pegs, setPegs] = useState<Array<Array<number>>>([[2, 1, 0], [], []]);
  const [discPicked, setDiscPicked] = useState<number | undefined>(undefined);

  function pegSelect(pegNumber: number) {
    const clone = [...pegs];
    if (discPicked !== undefined) {
      console.log(clone);
      const newClone = clone[pegNumber].push(discPicked);
      console.log(newClone);
      setPegs([...clone]);
      return setDiscPicked(undefined);
    } else {
      const poppedDisc = clone[pegNumber].pop();
      console.log(poppedDisc);
      console.log(clone);
      setDiscPicked(poppedDisc);
      setPegs([...clone]);
    }
  }

  return (
    <>
      <div>Peg picked</div>
      <div className="pegs-container">
        {pegs?.map((peg, pegNum) => (
          <div
            className="peg"
            style={{
              cursor:
                !!peg.length || discPicked !== undefined
                  ? "pointer"
                  : "not-allowed",
            }}
            onClick={() => pegSelect(pegNum)}
          >
            <div className="stand" />
            <div className="disc-container">
              {peg.map((disc) => (
                <span
                  className="disc"
                  style={{
                    width: 50 + 25 * disc + "px",
                  }}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
