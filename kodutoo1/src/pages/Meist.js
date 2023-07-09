import React, { useState } from "react";

function Meist() {
  const [message, määraMessage] = useState("Vali mõni tegevus");

  return (
    <div>
      <button onClick={() => määraMessage("Selleks saada meile e-mail jobs@html-css.com")}>Kandideeri tööle</button>
      <button onClick={() => määraMessage('Meil on 10 töötajat, kelle info ilmub veebilehele lähiajal')}>Vaata meie töötajaid</button>
      <button onClick={() => määraMessage('Ühenduse võtmiseks mine lehele Kontakt')}>Võta meiega ühendust</button>
      <br />
      {message}
    </div>
  );
}

export default Meist;
