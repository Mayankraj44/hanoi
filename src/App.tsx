import { useState } from "react";
import "./App.css";

const NUMBER = 3;

function App() {
  const winningArray = [...Array(NUMBER).keys()].reverse();
  const [pegs, setPegs] = useState<Array<Array<number>>>([[2, 1, 0], [], []]);
  const [discPicked, setDiscPicked] = useState<number | undefined>(undefined);

  function wonOrNot() {
    let targetArray = JSON.stringify(pegs[2]);
    let winningString = JSON.stringify(winningArray);
    if (winningString === targetArray) {
      console.log("YOu Won");
    }
  }

  function pegSelect(pegNumber: number) {
    const clone = [...pegs];
    if (discPicked !== undefined) {
      if (
        clone[pegNumber]?.length === 0 ||
        clone[pegNumber][clone[pegNumber]?.length - 1] > discPicked
      ) {
        const newClone = clone[pegNumber].push(discPicked);
        setDiscPicked(undefined);
        setPegs([...clone]);
      }
      wonOrNot();
      return;
    } else {
      const poppedDisc = clone[pegNumber].pop();

      setDiscPicked(poppedDisc);
      setPegs([...clone]);
    }
  }

  return (
    <>
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
