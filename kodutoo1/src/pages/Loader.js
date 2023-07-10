import React, { useState } from "react";

function Loader() {
  const [kasLaeb, uuendaLaadimist] = useState(true);
  return (
    <div className="keskel">
      {kasLaeb === true && (
        <div class="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      <br />
      {kasLaeb === true && <button onClick={() => uuendaLaadimist(false)}>Lõpeta laadimine</button>}
    </div>
  );
}

export default Loader;
