import { useState } from "react";
import "./App.css";
import randomColor from "randomcolor";

const NUMBER = 3;
const colorArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];
function App() {
  const winningArray = [...Array(NUMBER).keys()].reverse();
  const [pegs, setPegs] = useState<Array<Array<number>>>([[2, 1, 0], [], []]);
  const [discPicked, setDiscPicked] = useState<number | undefined>(undefined);
  const [won, setWon] = useState(false);
  function wonOrNot() {
    let targetArray = JSON.stringify(pegs[2]);
    let winningString = JSON.stringify(winningArray);
    if (winningString === targetArray) {
      console.log("YOu Won");
      setWon(true);
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
  function reset() {
    const resetData = [[...winningArray], [], []];
    setPegs([...resetData]);
    setDiscPicked(undefined);
    setWon(false);
  }

  return (
    <>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      <div>{won && "You Won"}</div>
      <div className="pegs-container">
        {pegs?.map((peg, pegNum) => (
          <div
            key={pegNum}
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
              {peg.map((disc, ind) => (
                <span
                  key={ind}
                  className="disc"
                  style={{
                    width: 50 + 25 * disc + "px",
                    backgroundColor: colorArray[disc],
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
