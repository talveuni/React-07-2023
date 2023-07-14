import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';

function App() {
  return (
    <div className="App">
      <Link to="/"><button>Avaleht</button></Link>
      <Link to="/tagasiside"><button>Tagasiside</button></Link>
      <Link to="/tagasiside-andjad"><button>Tagasiside andjad</button></Link>

      <Routes>
        <Route path="/" element={<Avaleht/>}/>
        <Route path="/tagasiside" element={<Tagasiside/>}/>
        <Route path="/tagasiside-andjad" element={<TagasisideAndjad/>}/>
        
      </Routes>

      
     
    </div>
  );
}

export default App;
