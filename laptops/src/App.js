import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/Avaleht";
import VaataArvuteid from "./pages/VaataArvuteid";
import LisaArvuti from "./pages/LisaArvuti";
import Ostukorv from "./pages/Ostukorv";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" exact element={<Avaleht />} />
        <Route path="all" exact element={<VaataArvuteid/>} />
        <Route path="add" exact element={<LisaArvuti/>} />
        <Route path="cart" exact element={<Ostukorv/>} />
      </Routes>

      <Link to="/"><button>Avalehele</button></Link>
      <Link to="/all"><button>Vaata sülearvuteid</button></Link>
      <Link to="/add"><button>Lisa sülearvuti</button></Link>
      <Link to="/cart"><button>Ostukorv</button></Link>
    </div>
  );
}

export default App;
