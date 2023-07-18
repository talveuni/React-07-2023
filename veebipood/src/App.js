import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import LisaToode from "./pages/LisaToode";
import Ostukorv from "./pages/Ostukorv";
import { useState } from "react";
import Seaded from "./pages/Seaded";
import Hinnad from "./pages/Hinnad";
import Poed from "./pages/Poed";
import Tooted from "./pages/Tooted";
import HaldaTooteid from "./pages/HaldaTooteid";
import MuudaToode from "./pages/MuudaToode";
import YksikToode from "./pages/YksikToode";
import YksikPood from "./pages/YksikPood";
import NotFound from "./pages/NotFound";

function App() {
  const [teema, uuendaTeema] = useState(
    localStorage.getItem("teema") || "hele"
  );

  const uuendaTeemaTume = () => {
    uuendaTeema("tume");
    localStorage.setItem("teema", "tume");
  };
  
  const uuendaTeemaHele = () => {
    uuendaTeema("hele");
    localStorage.setItem("teema", "hele");
  };

  return (
    <div className={teema}>
      <img
        className="pilt"
        src="https://gd.image-gmkt.com/T-SHIRT-WOMEN-PATCH-28CM-FUNNY-CAT-LOGO-IRON-ON-PATCHES-FOR-CLOTHING/li/572/764/1133764572.g_350-w-et-pj_g.jpg"
        alt="pilt"      />
      <br />
      <Link to="/"><button className="nupp">Avalehele</button></Link>
      <Link to="/ostukorv"><button className="nupp">Ostukorv</button></Link>
      <Link to="/lisa-toode"><button className="nupp">Lisa toode</button></Link>
      <Link to="/seaded"><button className="nupp">Seaded</button></Link>
      <Link to="/hinnad"><button className="nupp">Hinnad</button></Link>
      <Link to="/poed"><button className="nupp">Poed</button></Link>
      <Link to="/tooted"><button className="nupp">Tooted</button></Link>
      <Link to="/halda"><button className="nupp">Halda tooteid</button></Link>
     
      <br />
      <br />
      {teema === "tume" && (
        <button onClick={uuendaTeemaHele}>Hele teema</button>
      )}
      {teema === "hele" && (
        <button onClick={uuendaTeemaTume}>Tume teema</button>
      )}
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="/lisa-toode" element={<LisaToode />} />
        <Route path="/ostukorv" element={<Ostukorv />} />
        <Route path="/seaded" element={<Seaded />} />
        <Route path="/hinnad" element={<Hinnad />} />
        <Route path="/poed" element={<Poed />} />
        <Route path="/tooted" element={<Tooted />} />
        <Route path="/halda" element={<HaldaTooteid />} />
        <Route path="/muuda/:index" element={<MuudaToode />} />
        <Route path="/toode/:index" element={<YksikToode />} />
        <Route path="/poed/:yksPood" element={<YksikPood />} />
        <Route path="*" element={<NotFound />} />
      
      </Routes>
    </div>
  );
}

export default App;
