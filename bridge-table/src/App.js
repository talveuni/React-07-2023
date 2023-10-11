import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BsSuitClubFill,
  BsSuitDiamondFill,
  BsSuitHeartFill,
  BsSuitSpadeFill,
} from "react-icons/bs";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";

function App() {
  const [level, setLevel] = useState("");
  const levels = [1, 2, 3, 4, 5, 6, 7];
  const [trump, setTrump] = useState("");
  const trumps = ["clubs", "diamonds", "hearts", "spades", "NT"];
  const [risk, setRisk] = useState("");
  const risks = ["No double", "Double", "Redouble"];
  const [tricks, setTricks] = useState([]);
  const [trick, setTrick] = useState("");
  const [message, setMessage] = useState("")

  const chooseLevel = (level) => {
    setTrick("");
    generateTricks(level);
    setLevel(level);
  };

  const generateTricks = (level) => {
    const tricksRange = [];
    const totalPlusTrics = 7 - level;
    const totalMinusTrics = -level - 6;

    for (let i = totalMinusTrics; i <= totalPlusTrics; i++) {
      if (i === 0) {
        tricksRange.push("=");
      } else {
        tricksRange.push(i);
      }
    }

    return tricksRange;
  };

  // Set the tricks state once when the component mounts
  useState(() => {
    setTricks(generateTricks(level));
  }, [level]);

  const calculateScore = () => {
    setMessage("Mingi tähtis arvutus on toimunud")
    
  }

  return (
    <div className="App">
      <div>
        <h2>Bridge compensation score calculator</h2>
        <br />
        <Table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Level: </td>
              <td className="choice_container">
                {levels.map((value) => (
                  <label className={level === value ? "selected_choice" : "choice"} key={value}>
                    <input
                      className="level"
                      type="radio"
                      name="level"
                       value={value.toString()}
                      checked={level === value}
                      onChange={() => chooseLevel(value)}
                    />
                    <span>{value}</span>
                    
                  </label>
                ))}
              </td>
            </tr>

            <tr>
              <td>Trump: </td>
              <td className="choice_container">
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
                    {value==="clubs"&& <BsSuitClubFill /> }
                    {value==="diamonds"&& <BsSuitDiamondFill className="red"/> }
                    {value==="hearts"&& <BsSuitHeartFill className="red"/> }
                    {value==="spades"&& <BsSuitSpadeFill /> }
                    {value==="NT"&& <span>NT</span> }
                
                  </label>
                ))}
              </td>
            </tr>
           
            <tr>
              <td>Risk: </td>
              <td className="choice_container">
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
                    <span>{value}</span>
                    
                  </label>
                ))}
              </td>
            </tr>
            
           
            {
              <tr>
                <td>Tricks: </td>
                <td className="choice_container">
                  {generateTricks(level).map((value, index) => (
                    <label className={value === trick ? "selected_choice" : "choice"} key={index}>
                      <input
                        className="trick"
                        type="radio"
                        name="trick"
                        value={value.toString()}
                        onChange={() => setTrick(value)}
                      />
                      {value}
                    </label>
                  ))}
                </td>
              </tr>
            }
            <tr>
              <td colSpan={2}><div className="calc_btn"><Button onClick={calculateScore} variant="outline-secondary">Arvuta</Button></div></td>
              
            </tr>
            <tr>
              <td>Score: </td>
              <td> 
                {message} </td>
            </tr>
          </tbody>
        </Table>
        <p>Level: {level}</p>
        <p>Trump: {trump}</p>
        <p>Risk: {risk}</p>
        <p>Trics: {trick}</p>
      </div>
    </div>
  );
}

export default App;
