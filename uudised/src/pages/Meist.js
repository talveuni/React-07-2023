import React, { useState } from "react";

function Meist() {
  const [kontakt, n2itaKontakt] = useState("");

  return (
    <div>
      <div>See on meist leht, nähtav localhot:3000/meist aadressil</div>
      <br />
      <div>Meie töötajad</div>
      <br />
      <div>Kass Artur</div>
      <div>Pealik</div>
      <button onClick={() => n2itaKontakt("+3584569545")}>Võta ühendust</button>
      <br /> <br />
      <div>Saabastega Kass</div>
      <div>Reporter</div>
      <button onClick={() => n2itaKontakt("+36584568445")}>
        Võta ühendust
      </button>
      <br /> <br />
      <div>Hunt Kriimsilm</div>
      <div>Reklaam ja turundus</div>
      <button onClick={() => n2itaKontakt("+358456985")}>Võta ühendust</button>
      <br /> <br />
      <div>Karupoeg Puhh</div>
      <div>Toimetaja</div>
      <button onClick={() => n2itaKontakt("+3654854562")}>Võta ühendust</button>
      <br /> <br />
      {kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}{" "}
    </div>
  );
}

export default Meist;
