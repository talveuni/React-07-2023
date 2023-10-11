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
  const [score, setScore] = useState(0);
  const [vulnerable, setVulnerable] = useState(false);
  const levels = [1, 2, 3, 4, 5, 6, 7];
  const trumps = ["C", "D", "H", "S", "NT"];
  const risks = ["-", "X", "XX"];
  const possibleTricks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  const calculateScore = () => {
    const tricksMade = tricks - 6;
    const overTricks = tricksMade - level;
    console.log(tricks);
    console.log(tricksMade);
    console.log(overTricks);

    // Undertricks?
    if (tricksMade < 0) {
      if (risk === "-") {
        if (vulnerable) {
          return setScore(tricksMade * 100);
        }
        return setScore(tricksMade * 50);
      }

      // var penalty = vulnerable ? doubledVulnerable[-made] : doubledNotVulnerable[-made];
      // if (redoubled)
      //     penalty *= 2;
      // return penalty;
    }

    setScore(0);

    // Contract Points

    if (trump === "S" || trump === "H") {
      setScore(level * 30);
    }

    if (trump === "C" || trump === "D") {
      setScore(level * 20);
    }

    if (trump === "NT") {
      setScore(level * 30 + 10);
    }

    if (risk === "X") {
      setScore(score * 2);
    }

    if (risk === "XX") {
      setScore(score * 4);
    }

    // Level Bonus
    if (score < 100) {
      // Part score?
      setScore(score + 50);
      console.log("part score: " + score);
    } else if (vulnerable) {
      setScore(score + 500);
    } else {
      setScore(score + 300);
    }

    if (level === 7) {
      //grand slam?
      if (vulnerable) {
        setScore(score + 1500);
      }
      setScore(score + 1000);

      if (level === 6) {
        //small slam?
        if (vulnerable) {
          setScore(score + 750);
        }
        setScore(score + 500);
      }

      // Insult bonus?
      if (risk === "X") {
        setScore(score + 50);
      }

      if (risk === "XX") {
        setScore(score + 100);
      }

      // Overtrick bonus
      if (overTricks > 0) {
        if (risk === "X") {
          if (vulnerable) {
            setScore(score + overTricks * 200);
          }
          setScore(score + overTricks * 100);
        }

        if (risk === "XX") {
          if (vulnerable) {
            setScore(score + overTricks * 400);
          }
          setScore(score + overTricks * 200);
        }

        if (trump === "S" || trump === "H" || trump === "NT") {
          setScore(score + overTricks * 30);
        }

        if (trump === "C" || trump === "D") {
          setScore(score + overTricks * 20);
        }
      }

      return score;
    }
  };

  return (
    <div className="App">
      <h2>Bridge compensation score calculator</h2>
      <h5>Level: </h5>
      <div className="choice_container">
        {levels.map((value) => (
          <label
            className={level === value ? "selected_choice" : "choice"}
            key={value}
          >
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
          <label
            className={trump === value ? "selected_choice" : "choice"}
            key={value}
          >
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
          <label
            className={risk === value ? "selected_choice" : "choice"}
            key={value}
          >
            <input
              className="risk"
              type="radio"
              name="risk"
              value={value}
              checked={risk === value}
              onChange={() => setRisk(value)}
            />
            {value === "-" && <span>No double</span>}
            {value === "X" && <span>Double</span>}
            {value === "XX" && <span>Redouble</span>}
          </label>
        ))}
      </div>
      <h5>Vulnerable?</h5>
      <div className="choice_container">
        <span>Yes</span>
        <span>No</span>
      </div>

      {
        <div>
          <h5>Total tricks: </h5>
          <div className="choice_container">
            {possibleTricks.map((value, index) => (
              <label
                className={value === tricks ? "selected_choice" : "choice"}
                key={index}
              >
                <input
                  className="trick"
                  type="radio"
                  name="trick"
                  value={value.toString()}
                  onChange={() => setTricks(value)}
                />
                {value}
              </label>
            ))}
          </div>
        </div>
      }
      <div className="calc_btn">
        <Button onClick={calculateScore} variant="outline-secondary">
          Arvuta
        </Button>
      </div>
      <div>
        <h5>Score: </h5>
        {score}
      </div>

      <p>Level: {level}</p>
      <p>Trump: {trump}</p>
      <p>Risk: {risk}</p>
      <p>Trics: {tricks}</p>
    </div>
  );
}

export default App;
