import React, { useState } from "react";

function Avaleht() {
  const tegelased = [
    {
      eesnimi: "Mickey",
      perekonnanimi: "Mouse",
      elukoht: "Disneyland ",
    },
    {
      eesnimi: "Minnie",
      perekonnanimi: "Mouse",
      elukoht: "Disneyland ",
    },
    {
      eesnimi: "Winnie",
      perekonnanimi: "Pooh",
      elukoht: "Hundred Acre Wood ",
    },
    {
      eesnimi: "Roo",
      perekonnanimi: "Kangaroo",
      elukoht: "Hundred Acre Wood ",
    },
    {
      eesnimi: "Scooby ",
      perekonnanimi: "Doo",
      elukoht: "Crystal Cove",
    },
  ];

  const kuvaNimi = (tegelane) => {
    console.log(tegelane.eesnimi);
    uuendaKlikitud(tegelane.eesnimi);
  }

  const [klikitudNimi, uuendaKlikitud] = useState("");

  return (
    <div>
      {klikitudNimi !== "" && <div>Klikkisid tegelase {klikitudNimi} peal</div>}
      {tegelased.map((tegelane) => (
        <div>
          <div>{tegelane.eesnimi}</div>
          <div>{tegelane.perekonnanimi}</div>
          <div>{tegelane.elukoht}</div>
          <button onClick={()=>kuvaNimi(tegelane)}>Nupp</button> <br /> <br />
        </div>
        
      ))}

      {}

      {/* <div>
        <div>Mickey</div>
        <div>Mouse</div>
        <div>Disneyland</div>
      </div>
      <div>
        <div>Minnie</div>
        <div>Mouse</div>
        <div>Disneyland</div>
      </div>
      <div>
        <div>Winnie</div>
        <div>Pooh</div>
        <div>Hundred Acre Wood</div>
      </div>
      <div>
        <div>Roo</div>
        <div>Kangaroo</div>
        <div>Hundred Acre Wood</div>
      </div>
      <div>
        <div>Scooby</div>
        <div>Doo</div>
        <div>Crystal Cove</div>
      </div> */}
    </div>
  );
}

export default Avaleht;
