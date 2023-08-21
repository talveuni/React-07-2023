import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ScoreBoard from './pages/ScoreBoard';
import GameBoard from './pages/GameBoard';

function App() {
  return (
    <div className="App">
      <Link to="/"><button>Scoreboard</button></Link>
      <Link to="/game"><button>Game</button></Link>
      <br />

      
      <Routes>
        <Route path="/" element={<ScoreBoard />} />
        <Route path="/game" element={<GameBoard />} />
      </Routes>
    </div>
  );
}

export default App;
