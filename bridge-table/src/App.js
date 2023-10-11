import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BsSuitClubFill, BsSuitDiamondFill, BsSuitHeartFill, BsSuitSpadeFill } from "react-icons/bs";
import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [level, setLevel] = useState("");
  const levels = [1, 2, 3, 4, 5, 6, 7];
  const [trump, setTrump] = useState("");
  const trumps = ["C", "D", "H", "S", "NT"];
  const [risk, setRisk] = useState("");
  const risks = ["-", "X", "XX"];
  const tricks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const [trick, setTrick] = useState("");
  const vulnerable = false;
  let score = 0

  // const chooseLevel = (level) => {
  //   setTrick("");
  //   generateTricks(level);
  //   setLevel(level);
  // };

  // const generateTricks = (level) => {
  //   const tricksRange = [];
  //   const totalPlusTrics = 7 - level;
  //   const totalMinusTrics = -level - 6;

  //   for (let i = totalMinusTrics; i <= totalPlusTrics; i++) {
  //     if (i === 0) {
  //       tricksRange.push("=");
  //     } else {
  //       tricksRange.push(i);
  //     }
  //   }

  //   return tricksRange;
  // };

  // Set the tricks state once when the component mounts
  // useState(() => {
  //   setTricks(generateTricks(level));
  // }, [level]);


  const calculateScore = () => {
    const tricksMade = tricks - 6;
    const  overTricks = tricksMade - level;

    // Undertricks?
    if (tricksMade < 0) {
      if (risk === '-')
          return tricksMade * (vulnerable ? 100 : 50);
      // var penalty = vulnerable ? doubledVulnerable[-made] : doubledNotVulnerable[-made];
      // if (redoubled)
      //     penalty *= 2;
      // return penalty;
  }

  score = 0;

    // Contract Points

    if (trump === "S" || trump === "H") {
      score = level * 30;
    }

    if (trump === "C" || trump === "D") {
      score = level * 20;
    }

    if (trump === "NT") {
      score = level * 30 + 10;
    }

    if (risk === "X") {
      score *= 2;
    }

    if (risk === "XX") {
      score *= 4;
    }
   
    // Level Bonus
    if (score < 100) // Part score?
        score += 50;
    else {
        score += vulnerable ? 500 : 300; // game bonus
        if (level === 7) {
          // Grand slam?
          score += vulnerable ? 1500 : 1000;
        } 
        else if (level === 6) {
          // small slam?
          score += vulnerable ? 750 : 500;
        }   
    }

    // Insult bonus?
    if (risk === "X")
        score += 50;
    else if (risk === "XX")
        score += 100;

    // Overtrick bonus
    if (overTricks > 0) {
        if (risk === "X") {
            score += overTricks * (vulnerable ? 200 : 100);
        }

        if (risk === "XX") {
          score += overTricks * (vulnerable ? 400 : 200);
        }

        if (trump === "S" || trump === "H" || trump === "NT") {
          score += overTricks * 30;
        }

        if (trump === "C" || trump === "D") {
          score += overTricks * 20;
        }
    }

    return score;
    
  }

  return (
    <div className="App">
      <h2>Bridge compensation score calculator</h2>          
        {/* <Table responsive>
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
        </Table> */}
  
      
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
                    {value==="C" && <BsSuitClubFill /> }
                    {value==="D" && <BsSuitDiamondFill className="red"/> }
                    {value==="H" && <BsSuitHeartFill className="red"/> }
                    {value==="S" && <BsSuitSpadeFill /> }
                    {value==="NT" && <span>NT</span> }
                
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
                    {value==="-" && <span>No double</span> }
                    {value==="X" && <span>Double</span> }
                    {value==="XX" && <span>Redouble</span> }
                   
                  </label>
                ))}
              </div>
            
           
            { <div>
                <h5>Total tricks: </h5>
                <div className="choice_container">
                  {tricks.map((value, index) => (
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


                  {/* {generateTricks(level).map((value, index) => (
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
                  ))} */}
                </div>
                </div> 
              }
              <div className="calc_btn"><Button onClick={calculateScore} variant="outline-secondary">Arvuta</Button></div>
              
              <h5>Score: </h5>
              <div> {score} </div>


        <p>Level: {level}</p>
        <p>Trump: {trump}</p>
        <p>Risk: {risk}</p>
        <p>Trics: {trick}</p>
   

    </div>
  );
}

export default App;
