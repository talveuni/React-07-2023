import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaJook from './pages/LisaJook';
import Haldajooke from './pages/Haldajooke';

function App() {
  return (
    <div className="App">
      <Link to = "/"><button>Avaleht</button></Link>
      <Link to = "/lisa"><button>Lisa jook</button></Link>
      <Link to = "/halda"><button>Halda Jooke</button></Link>

      <Routes>
        <Route path = "/" element={<Avaleht/>}/>
        <Route path = "/lisa" element={<LisaJook/>}/>
        <Route path = "/halda" element={<Haldajooke/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
