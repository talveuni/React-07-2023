import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BsSuitClubFill, BsSuitDiamondFill, BsSuitHeartFill, BsSuitSpadeFill} from "react-icons/bs";
import { useState } from 'react';
import { ButtonToolbar, Table, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

function App() {
const [level, setlevel] = useState();
const [trump, setTrump] = useState();
const [risk, setRisk] = useState();
const [message, setMessage] = useState();

const handleTrumpClick = (key) => {
  setTrump(key);
  setMessage(trump);
  console.log(trump)
}

  const onChangeValue = (event) => {
    console.log(event.target.value);
  }

  const selectTrump = e => {
    setTrump(e.target.value)
  }





  return (
    <div className='App'>
      <div>{message}</div>
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
                <div className='choice'>1</div>
                <div className='choice'>2</div>
                <div className='choice'>3</div>
                <div className='choice'>4</div>
                <div className='choice'>5</div>
                <div className='choice'>6</div>
                <div className='choice'>7</div>
              </td>
            </tr>
            <tr>
              <td > Trump: </td>
              <td className='choice_container'>
                <div id='clubs' className='choice' onClick={() => handleTrumpClick("clubs")}><BsSuitClubFill /></div>
                <div id='diamonds' className='choice' onClick={() => handleTrumpClick("diamonds")}><BsSuitDiamondFill className='red' /></div>
                <div className='choice'><BsSuitHeartFill className='red'/></div>
                <div className='choice'><BsSuitSpadeFill /></div>
                <div className='choice'>NT</div>
              </td>
            </tr>
            <tr>
              <td >Risk: </td>
              <td className='choice_container'>
                <div className='risk'>No double</div>
                <div className='risk'>Double</div>
                <div className='risk'>Redouble</div>
              </td>
            </tr>
          </tbody>
        </Table>

        <label htmlFor="">Level</label>
        <input type="radio" />
  
        {/* <div className='choice_container'>
          <h4>Level: </h4>
          <div className='choice'>1</div>
          <div className='choice'>2</div>
          <div className='choice'>3</div>
          <div className='choice'>4</div>
          <div className='choice'>5</div>
          <div className='choice'>6</div>
          <div className='choice'>7</div>
        </div> */}

        {/* <div className='choice_container'>
          <h4>Trump: </h4>
          <div id='clubs' className='choice' onClick={() => handleTrumpClick("clubs")}><BsSuitClubFill /></div>
          <div id='diamonds' className='choice' onClick={() => handleTrumpClick("diamonds")}><BsSuitDiamondFill className='red' /></div>
          <div className='choice'><BsSuitHeartFill className='red'/></div>
          <div className='choice'><BsSuitSpadeFill /></div>
          <div className='choice'>NT</div>
        </div> */}

        {/* <div className='choice_container'>
          <h4>Risk: </h4>
          <div className='risk'>No double</div>
          <div className='risk'>Double</div>
          <div className='risk'>Redouble</div>
        </div> */}
    
      </div>
      {/* <img src="sample.png" alt="" /> */}

      {/* <div className='choice_container'>

      <input type="radio" class="btn-check" name="options" id="option1"/>
      <label class="btn btn-secondary" for="option1">Checked</label>

      <input type="radio" class="btn-check" name="options" id="option2"/>
      <label class="btn btn-secondary" for="option2">Radio</label>

      <input type="radio" class="btn-check" name="options" id="option3"/>
      <label class="btn btn-secondary" for="option3">Disabled</label>

      <input type="radio" class="btn-check" name="options" id="option4"/>
      <label class="btn btn-secondary" for="option4">Radio</label>

      </div> */}

      <div>
      <ButtonToolbar>
        <ToggleButtonGroup type="radio" name="options">
          <ToggleButton value={1}>Radio 1</ToggleButton>
          <ToggleButton value={2}>Radio 2</ToggleButton>
          <ToggleButton value={3}>Radio 3</ToggleButton>
        </ToggleButtonGroup>
     </ButtonToolbar>

     {/* <div>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div> */}
      </div>

      <h3>Trump</h3>

      <label className='choice'>
      <input className='trump'
        type="radio"
        name="trump"
        value="clubs"
        id="clubs"
        checked={trump === "clubs"}
        onChange={selectTrump}
      />
      <BsSuitClubFill />
      </label>

      <label className='choice'>
      <input className='trump'
        type="radio"
        name="trump"
        value="diamonds"
        id="diamonds"
        checked={trump === "diamonds"}
        onChange={selectTrump}
      />
      <BsSuitDiamondFill className='red'/>
      </label>

      <label className='choice'>
      <input className='trump'
        type="radio"
        name="trump"
        value="hearts"
        id="hearts"
        checked={trump === "hearts"}
        onChange={selectTrump}
      />
      <BsSuitHeartFill className='red'/>
      </label>

      <label className='choice'>
      <input className='trump'
        type="radio"
        name="trump"
        value="spades"
        id="spades"
        checked={trump === "spades"}
        onChange={selectTrump}
      />
     <BsSuitSpadeFill/>
     </label>

      <p>
       Trump: <strong>{trump}</strong>
      </p>


      
    </div>
  );
}

export default App;
