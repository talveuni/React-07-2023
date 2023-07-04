//import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <img className="pilt" src="https://gd.image-gmkt.com/T-SHIRT-WOMEN-PATCH-28CM-FUNNY-CAT-LOGO-IRON-ON-PATCHES-FOR-CLOTHING/li/572/764/1133764572.g_350-w-et-pj_g.jpg" alt="pilt"/>
      <button className="nupp">Lisa toode</button>
      <button className="nupp">Ostukorv</button>

      <Routes>
        <Route path="avaleht" element={ <div>Olen avalehel</div>} />
        <Route path="lisa-toode" element={ <div>Olen toote lisamise lehel</div>} />
        <Route path="ostukorv" element={ <div>Olen ostukorvi lehel</div>} />
      </Routes>


    </div>
  );
}

export default App;
