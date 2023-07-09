import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaTegelane from './pages/LisaTegelane';
import ValitudTegelased from './pages/ValitudTegelased';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path ="/" element={<Avaleht/>}/>
        <Route path ="/lisa-tegelane" element={<LisaTegelane/>}/>
        <Route path ="/valitud-tegelased" element={<ValitudTegelased/>}/>


      </Routes>

    </div>
  );
}

export default App;
