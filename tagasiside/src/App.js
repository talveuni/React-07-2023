import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import YksikTagasisideAndja from './pages/YksikTagasisideAndja';
import Tegevused from './pages/Tegevused';
import Kasutajad from './pages/Kasutajad';

function App() {
  return (
    <div className="App">
      <Link to="/"><button>Avaleht</button></Link>
      <Link to="/tagasiside"><button>Tagasiside</button></Link>
      <Link to="/tagasiside-andjad"><button>Tagasiside andjad</button></Link>
      <Link to="/tegevused"><button>Tegevused</button></Link>
      <Link to="/kasutajad"><button>Kasutajad</button></Link>

      <Routes>
        <Route path="/" element={<Avaleht/>}/>
        <Route path="/tagasiside" element={<Tagasiside/>}/>
        <Route path="/tagasiside-andjad" element={<TagasisideAndjad/>}/>
        <Route path="/tagasiside-andjad/:index" element={<YksikTagasisideAndja/>}/>
        <Route path="/tegevused" element={<Tegevused/>}/>
        <Route path="/kasutajad" element={<Kasutajad/>}/>
        
      </Routes>

      
     
    </div>
  );
}

export default App;
