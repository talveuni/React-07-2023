import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/Avaleht";
import Meist from "./pages/Meist";
import Seaded from "./pages/Seaded";
import Kontakt from "./pages/Kontakt";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Avaleht</button>
      </Link>
      <Link to="/kontakt">
        <button>Kontakt</button>
      </Link>
      <Link to="/meist">
        <button>Meist</button>
      </Link>
      <Link to="/seaded">
        <button>Seaded</button>
      </Link>

      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/meist" element={<Meist />} />
        <Route path="/seaded" element={<Seaded />} />
      </Routes>
    </div>
  );
}

export default App;
