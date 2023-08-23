import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ScoreBoard from './pages/ScoreBoard';
import GameBoard from './pages/GameBoard';
import HomePage from './pages/HomePage';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>Tic tac toe game</h1>
      <div>
      <Button as= {Link} to="/scores" variant="outline-dark">Scoreboard</Button>
      <Button as={Link} to="/" variant="outline-dark" >New game</Button>
      </div>
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
