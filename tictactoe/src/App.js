import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ScoreBoard from './pages/ScoreBoard';
import GameBoard from './pages/GameBoard';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <h1>Tic tac toe game</h1>
      <Link to="/scores"><button>Scoreboard</button></Link> 
      <Link to="/"><button>New players</button></Link> 

      <br />

      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scores" element={<ScoreBoard />} />
        <Route path="/game" element={<GameBoard />} />

      </Routes>
    </div>
  );
}

export default App;
