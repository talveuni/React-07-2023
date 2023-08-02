import React, { useState } from "react";

function Avaleht() {
  const tegelased = JSON.parse(localStorage.getItem("tegelased"));
  
  //   const tegelased = [{
  //     eesnimi: "Mickey",
  //     perekonnanimi: "Mouse",
  //     elukoht: "Disneyland ",
  //     vanus: "16",
  //   },
  //   {
  //     eesnimi: "Minnie",
  //     perekonnanimi: "Mouse",
  //     elukoht: "Disneyland ",
  //     vanus: "15",
  //   },
  //   {
  //     eesnimi: "Winnie",
  //     perekonnanimi: "Pooh",
  //     elukoht: "Hundred Acre Wood ",
  //     vanus: "20",
  //   },
  //   {
  //     eesnimi: "Roo",
  //     perekonnanimi: "Kangaroo",
  //     elukoht: "Hundred Acre Wood ",
  //     vanus: "25",
  //   },
  //   {
  //     eesnimi: "Scooby ",
  //     perekonnanimi: "Doo",
  //     elukoht: "Crystal Cove",
  //     vanus: "35",
  //   },
  // ];

  const kuvaNimi = (tegelane) => {
    console.log(tegelane.eesnimi);
    uuendaKlikitud(tegelane.eesnimi);
  }

  const [klikitudNimi, uuendaKlikitud] = useState("");

  const valiTegelane = (klikitudTegelane) => {
    const valitudTegelased = JSON.parse(localStorage.getItem("valitudTegelased") || "[]");
    valitudTegelased.push(klikitudTegelane);
    localStorage.setItem("valitudTegelased", JSON.stringify(valitudTegelased))
  }

  return (
    <div>
      {klikitudNimi !== "" && <div>Klikkisid tegelase {klikitudNimi} peal</div>}
      {tegelased.map((tegelane, index) => (
        <div key= {index}>
          <div>Eesnimi: {tegelane.eesnimi}</div>
          <div>Perekonnanimi: {tegelane.perekonnanimi}</div>
          <div>Elukoht: {tegelane.elukoht}</div>
          <div>Vanus: {tegelane.vanus}</div>
          <button onClick={()=>kuvaNimi(tegelane)}>Nupp</button>
          <button onClick={()=>valiTegelane(tegelane)}>Vali tegelane</button> <br /> <br />
        </div>
      ))}
    </div>
  );
}

export default Avaleht;
