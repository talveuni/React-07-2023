import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BsSuitClubFill, BsSuitDiamondFill, BsSuitHeartFill, BsSuitSpadeFill } from "react-icons/bs";
import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [level, setLevel] = useState("");
  const [trump, setTrump] = useState("");
  const [risk, setRisk] = useState("");
  const [tricks, setTricks] = useState("");
  const [vulnerable, setVulnerable] = useState("");
  const [score, setScore] = useState("");
  const levels = [1, 2, 3, 4, 5, 6, 7];
  const trumps = ["C", "D", "H", "S", "NT"];
  const risks = ["-", "X", "XX"];
  const possibleTricks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const doubledNotVulnerable = [
    0, -100, -300, -500, -800, -1100, -1400, -1700, -2000, -2300, -2600, -2900,
    -3200, -3500,
  ];
  const doubledVulnerable = [
    0, -200, -500, -800, -1100, -1400, -1700, -2000, -2300, -2600, -2900, -3200,
    -3500, -3800,
  ];

  const contractPresented = () => {
    if (level === "" || trump === "" || risk === "" || tricks === "" || vulnerable === "") {
      return false;
    }
    return true;
  };

  const calculateScore = () => {
    let calculatedScore = 0;
    const tricksMade = tricks - 6;
    const overTricks = tricksMade - level;
    setScore(calculatedScore);

    // Undertricks:
    if (overTricks < 0) {
      if (risk === "-") {
        if (vulnerable) {
          return setScore(overTricks * 100);
        }
        return setScore(overTricks * 50);
      }

      if (risk === "X") {
        if (vulnerable) {
          return setScore(doubledVulnerable[-overTricks]);
        }
        return setScore(doubledNotVulnerable[-overTricks]);
      }

      if (risk === "XX") {
        if (vulnerable) {
          return setScore(doubledVulnerable[-overTricks] * 2);
        }
        return setScore(doubledNotVulnerable[-overTricks] * 2);
      }
    }

    // Contract Points:
    if (trump === "S" || trump === "H") {
      calculatedScore = level * 30;
    }

    if (trump === "C" || trump === "D") {
      calculatedScore = level * 20;
    }

    if (trump === "NT") {
      calculatedScore = level * 30 + 10;
    }

    if (risk === "X") {
      calculatedScore *= 2;
      
    }

    if (risk === "XX") {
      calculatedScore *= 4;
      
    }

    // Level Bonus:
    if (calculatedScore < 100) { // part score
      calculatedScore += 50;
    } else if (vulnerable) { // game bonus
      calculatedScore += 500;
    } else {
      calculatedScore += 300;
    }

    if (level === 7) { // grand slam
      if (vulnerable) {
        calculatedScore += 1500;
      } else {
        calculatedScore += 1000;
      }
    }

    if (level === 6) { // small slam
      if (vulnerable) {
        calculatedScore += 750;
      } else {
        calculatedScore += 500;
      }
    }

    if (risk === "X") { // insult bonus
      calculatedScore += 50; 
    }

    if (risk === "XX") { // insult bonus
      calculatedScore += 100; 
    }

    // Overtrick bonus:
    if (overTricks > 0) {
      if (risk === "X") {
        if (vulnerable) {
          calculatedScore += overTricks * 200;
        }
        calculatedScore += overTricks * 100;
      }

      if (risk === "XX") {
        if (vulnerable) {
          calculatedScore += overTricks * 400;
        }
        calculatedScore += overTricks * 200;
      }

      if (trump === "S" || trump === "H" || trump === "NT") {
        calculatedScore += overTricks * 30;
      }

      if (trump === "C" || trump === "D") {
        calculatedScore += overTricks * 20;
      }
    }
    setScore(calculatedScore);
  };

  return (
    <div className="App">
      <h2>Bridge compensation score calculator</h2>
      <h5>Level: </h5>
      <div className="choice_container">
        {levels.map((value) => (
          <label className={level === value ? "selected_choice" : "choice"} key={value}>
            <input
              className="level"
              type="radio"
              name="level"
              value={value.toString()}
              checked={level === value}
              onChange={() => setLevel(value)}
            />
            <span>{value}</span>
          </label>
        ))}
      </div>

      <h5>Trump: </h5>
      <div className="choice_container">
        {trumps.map((value) => (
          <label className={trump === value ? "selected_choice" : "choice"} key={value}>
            <input
              className="trump"
              type="radio"
              name="trump"
              value={value}
              checked={trump === value}
              onChange={() => setTrump(value)}
            />
            {value === "C" && <BsSuitClubFill />}
            {value === "D" && <BsSuitDiamondFill className="red" />}
            {value === "H" && <BsSuitHeartFill className="red" />}
            {value === "S" && <BsSuitSpadeFill />}
            {value === "NT" && <span>NT</span>}
          </label>
        ))}
      </div>

      <h5>Risk: </h5>
      <div className="choice_container">
        {risks.map((value) => (
          <label className={risk === value ? "selected_choice" : "choice"} key={value}>
            <input
              className="risk"
              type="radio"
              name="risk"
              value={value}
              checked={risk === value}
              onChange={() => setRisk(value)}
            />
            {value === "-" && <span className="risk_center">No double</span>}
            {value === "X" && <span className="risk_center">Double</span>}
            {value === "XX" && <span className="risk_center">Redouble</span>}
          </label>
        ))}
      </div>
      <h5>Vulnerable?</h5>
      <div className="choice_container">
        <label className={vulnerable === false ? "selected_choice" : "choice"}>
          <input
            className="vulnerable"
            type="radio"
            name="vulnerable"
            value={false}
            onChange={() => setVulnerable(false)}
          />
          <span>No</span>
        </label>

        <label className={vulnerable === true ? "selected_choice" : "choice"}>
          <input
            className="vulnerable"
            type="radio"
            name="vulnerable"
            value={true}
            onChange={() => setVulnerable(true)}
          />
          <span>Yes</span>
        </label>
      </div>
 
      {
        <div>
          <h5>Total tricks: </h5>
          <div className="choice_container">
            {possibleTricks.map((value, index) => (
              <label className={value === tricks ? "selected_choice" : "choice"} key={index}>
                <input
                  className="trick"
                  type="radio"
                  name="trick"
                  value={value}
                  onChange={() => setTricks(value)}
                />
                {value}
              </label>
            ))}
          </div>
        </div>
      }
      <div className="calc_btn">
        <Button disabled={!contractPresented()} onClick={calculateScore} variant="outline-success">
          Calculate
        </Button>
      </div>
      <div>
        <h5>Score: {score} </h5>
      </div>

      <div>
        <h5>Contract: </h5>
        <div>
          {level + " "}
          {trump === "C" && <BsSuitClubFill />}
          {trump === "D" && <BsSuitDiamondFill className="red" />}
          {trump === "H" && <BsSuitHeartFill className="red" />}
          {trump === "S" && <BsSuitSpadeFill />}
          {trump === "NT" && <span> NT</span>}
          {risk === "-" && <span> No double</span>}
          {risk === "X" && <span> Double</span>}
          {risk === "XX" && <span> Redouble</span>}
        </div>
        <div>Tricks: {tricks}</div>
        <div>
          Vulnerable:
          {vulnerable === true && <span> Yes </span>}
          {vulnerable === false && <span> No </span>}
        </div>
      </div>
    </div>
  );
}

export default App;
