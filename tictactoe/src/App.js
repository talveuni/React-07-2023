import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ScoreBoard from './pages/ScoreBoard';
import GameBoard from './pages/GameBoard';
import GameBoard2 from './pages/GameBoard2';

function App() {
  return (
    <div className="App">
      <Link to="/"><button>Scoreboard</button></Link>
      <Link to="/game"><button>Game</button></Link>
      <br />

      
      <Routes>
        <Route path="/" element={<ScoreBoard />} />
        <Route path="/game" element={<GameBoard />} />
        <Route path="/game-test" element={<GameBoard2 />} />

      </Routes>
    </div>
  );
}

export default App;
