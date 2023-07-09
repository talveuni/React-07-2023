import { Link, Route, Routes } from "react-router-dom";
import React, { useState, useRef } from "react";
import "./App.css";
import Avaleht from "./pages/Avaleht";
import Meist from "./pages/Meist";
import Seaded from "./pages/Seaded";
import Kontakt from "./pages/Kontakt";

function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState('');
  const kasutajanimiRef = useRef();
  const paroolRef = useRef();

 
 const logiSisse = () => {
    
    if (paroolRef.current.value === '123') {
      muudaSisselogitud('jah');
      muudaSonum(kasutajanimiRef.current.value + ', oled sisselogitud!');

    } else {
      muudaSonum('Vale parool!');
    }
  }

  const logiV2lja = () => {
    muudaSisselogitud('ei');
    muudaSonum('');
  }

  return (
    <div className="App">
      <div className="keskel">
      <div>{sonum}</div>
      {sisselogitud === 'ei' && <div>
      <label>Kasutajanimi: </label> <br />
      <input ref = {kasutajanimiRef} type ="text" /><br />
      <label>Prool: </label> <br />
      <input ref = {paroolRef} type="password" />
      </div>}

      
      {sisselogitud === "ei" && (<button onClick={logiSisse}>Logi sisse</button>)}
      {sisselogitud === "jah" && (<button onClick={logiV2lja}>Logi välja</button>)}
      <br />
      <br /> 
      
      <Link to="/"> <button>Avaleht</button> </Link>
      <Link to="/kontakt"> <button>Kontakt</button> </Link>
      <Link to="/meist"> <button>Meist</button> </Link>
      <Link to="/seaded"> <button>Seaded</button> </Link>
      </div>
      
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
