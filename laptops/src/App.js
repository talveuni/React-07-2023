import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/Avaleht";
import VaataArvuteid from "./pages/VaataArvuteid";
import LisaArvuti from "./pages/LisaArvuti";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" exact element={<Avaleht />} />
        <Route path="all" exact element={<VaataArvuteid/>} />
        <Route path="add" exact element={<LisaArvuti/>} />
      </Routes>

      <Link to="/">
        <button>Avalehele</button>
      </Link>

      <Link to="/all">
        <button>Vaata sülearvuteid</button>
      </Link>

      <Link to="/add">
        <button>Lisa sülearvuti</button>
      </Link>
    </div>
  );
}

export default App;
