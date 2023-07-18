// import React, { useState } from 'react'
import tootedFailist from "../data/tooted.json"
import ostukorvFailist from "../data/ostukorv.json"
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useState } from "react";

function Tooted() {
const [tooted, uuendaTooted] = useState(tootedFailist);

  const lisaOstukorvi = (toode) => {
    ostukorvFailist.push(toode);
    toast.success("Ostukorvi lisatud!"); // .sucess on roheline hüpik
  }

  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    uuendaTooted(tooted.slice());

  }

  const sorteeriZA = () => {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKasv = () => {
    tooted.sort((a,b) => a.hind - b.hind);
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKah = () => {
    tooted.sort((a,b) => b.hind - a.hind);
    uuendaTooted(tooted.slice());
  }

  return (
    <div>
      
      <button onClick={sorteeriAZ}>Tooted AZ</button>
      <button onClick={sorteeriZA}>Tooted ZA</button>
      <button onClick={sorteeriHindKah}>Hind kahanevalt</button>
      <button onClick={sorteeriHindKasv}>Hind kasvavalt</button>


      {tooted.map((toode, index) =>
        <div key ={index}> 
        <img className ="pilt" src={toode.pilt} alt="" />
        {toode.nimi} - {toode.hind} €
        <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
        <Link to={"/toode/" + index}>
          <button>Vaata detailsemalt</button>
        </Link>
    
        </div>
      )}

      
    <ToastContainer
        position='bottom-right'
        autoClose={4000}
        theme= {localStorage.getItem("teema") === "tume" ? "light" : 'dark'}
    />
    </div>
  )
}

export default Tooted