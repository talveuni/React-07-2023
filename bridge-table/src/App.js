import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BsSuitClubFill, BsSuitDiamondFill, BsSuitHeartFill, BsSuitSpadeFill} from "react-icons/bs";

function App() {
  return (
    <div className='App'>
      <div>
  
        <div className='choice_container'>
          <h4>Level: </h4>
          <div className='choice'>1</div>
          <div className='choice'>2</div>
          <div className='choice'>3</div>
          <div className='choice'>4</div>
          <div className='choice'>5</div>
          <div className='choice'>6</div>
          <div className='choice'>7</div>
        </div>

        <div className='choice_container'>
          <h4>Trump: </h4>
          <div className='choice'><BsSuitClubFill /></div>
          <div className='choice'><BsSuitDiamondFill className='red' /></div>
          <div className='choice'><BsSuitHeartFill className='red'/></div>
          <div className='choice'><BsSuitSpadeFill /></div>
          <div className='choice'>NT</div>
        </div>

        <div className='choice_container'>
          <h4>Risk: </h4>
          <div className='risk'>No double</div>
          <div className='risk'>Double</div>
          <div className='risk'>Redouble</div>
        </div>



      </div>
      {/* <img src="sample.png" alt="" /> */}

      
    </div>
  );
}

export default App;
