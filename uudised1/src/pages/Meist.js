import React, { useState } from "react";

function Meist() {
  const [kontakt, n2itaKontakt] = useState("");
  const [valitud, uuendaValitud] = useState("");

  const votaYhendust = (tootaja) => {
    n2itaKontakt(tootaja.telefon);
    uuendaValitud(tootaja.nimi);
  };

  const tootajad = [
    {
      nimi: "Arvo",
      ala: "Muusika",
      telefon: "Täpsustamisel ",
    },
    {
      nimi: "Kelly",
      ala: "Reporter",
      telefon: "Täpsustamisel ",
    },
    {
      nimi: "Edward",
      ala: "Kujundus",
      telefon: "Täpsustamisel ",
    },
    {
      nimi: "Kerli",
      ala: "Välisturud",
      telefon: "Täpsustamisel ",
    },
    {
      nimi: "jne",
      ala: "jne",
      telefon: "jne",
    },
  ];

  return (
    <div>
      <div>See on meist leht, nähtav localhot:3000/meist aadressil</div>
      <div>Meie töötajad: </div>
      <div>Valitud: {valitud}</div>

      <div>
        {tootajad.map((tootaja) => (
          <div className={tootaja.nimi === valitud ? "valitud" : undefined}>
            <div>Nimi: {tootaja.nimi}</div>
            <div>Ala: {tootaja.ala}</div>
            <button onClick={() => votaYhendust(tootaja)}>Võta ühendust</button>
            <br /> <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meist;
