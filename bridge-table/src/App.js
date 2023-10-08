import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BsSuitClubFill, BsSuitDiamondFill, BsSuitHeartFill, BsSuitSpadeFill} from "react-icons/bs";
import { useState } from 'react';
import { Table } from 'react-bootstrap';

function App() {
const [level, setLevel] = useState();
const [trump, setTrump] = useState();
const [risk, setRisk] = useState();

  return (
    <div className='App'>
        <div>

        <Table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >Level: </td>
              <td className='choice_container'>
              <label className='choice'>
              <input className='level'
                type="radio"
                name="level"
                value="1"
                onChange={()=>setLevel(1)}
              />
              <span>1</span>
              </label>

              <label className='choice'>
              <input className='level'
                type="radio"
                name="level"
                value="2"
                onChange={()=>setLevel(2)}
              />
              <span>2</span>
              </label>
              <label className='choice'>
              <input className='level'
                type="radio"
                name="level"
                value="3"
                onChange={()=>setLevel(3)}
              />
              <span>3</span>
              </label> <label className='choice'>
              <input className='level'
                type="radio"
                name="level"
                value="4"
                onChange={()=>setLevel(4)}
              />
              <span>4</span>
              </label> <label className='choice'>
              <input className='level'
                type="radio"
                name="level"
                value="5"
                id="5"
                checked={level === 5}
                onChange={()=>setLevel(5)}
              />
              <span>5</span>
              </label> <label className='choice'>
              <input className='level'
                type="radio"
                name="level"
                value="6"
                onChange={()=>setLevel(6)}
              />
              <span>6</span>
              </label> <label className='choice'>
              <input className='level'
                type="radio"
                name="level"
                value="7"
                onChange={()=>setLevel(7)}
              />
              <span>7</span>
              </label>
              </td>
            </tr>
            <tr>
              <td > Trump: </td>
              <td className='choice_container'>
              <label className='choice'>
              <input className='trump'
                type="radio"
                name="trump"
                value="clubs"
                onChange={()=>setTrump("clubs")}
              />
              <BsSuitClubFill />
              </label>

              <label className='choice'>
              <input className='trump'
                type="radio"
                name="trump"
                value="diamonds"
                onChange={()=>setTrump("diamonds")}
              />
              <BsSuitDiamondFill className='red'/>
              </label>

              <label className='choice'>
              <input className='trump'
                type="radio"
                name="trump"
                value="hearts"
                onChange={()=>setTrump("hearts")}
              />
              <BsSuitHeartFill className='red'/>
              </label>

              <label className='choice'>
              <input className='trump'
                type="radio"
                name="trump"
                value="spades"
                onChange={()=>setTrump("spades")}
              />
            <BsSuitSpadeFill/>
            </label>

            <label className='choice'>
              <input className='trump'
                type="radio"
                name="trump"
                value="NT"
                onChange={()=>setTrump("NT")}
              />
            <span>NT</span>
            </label>
              </td>
            </tr>
            <tr>
              <td>Risk: </td>
              <td className='choice_container'>
                <label className='choice'>
                  <p>No double</p>
                  <input className='risk'
                    type="radio"
                    name="risk"
                    value="no double"
                    onChange={()=>setRisk("No double")}
                  />
                </label>
                <label className='choice'>
                  <p>Double</p>
                  <input className='risk'
                    type="radio"
                    name="risk"
                    value="double"
                    onChange={()=>setRisk("Double")}
                  />
                </label>
                <label className='choice'>
                  <p>Redouble</p>
                  <input className='risk'
                    type="radio"
                    name="risk"
                    value="redouble"
                    onChange={()=>setRisk("Redouble")}
                  />
                </label>
                
                <div className='risk'>No double</div>
                <div className='risk'>Double</div>
                <div className='risk'>Redouble</div>
              </td>
            </tr>
          </tbody>
        </Table>
        <p>Level: {level}</p>
        <p>Trump: {trump}</p>
        <p>Risk: {risk}</p>
      </div>     
    </div>
  );
}

export default App;
