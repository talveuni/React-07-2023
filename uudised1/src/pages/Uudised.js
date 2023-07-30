import React from "react";
import { Link } from "react-router-dom";

function Uudised() {
  const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

  return (
    <div>
      <div>See on uudiste leht, nähtav localhot:3000/uudised aadressil</div>
      <br />
      {uudised.map((uudis, index) => (
        <Link key = {index} to={"/uudis/" + index}>
          <div>{uudis}</div>
        </Link>
      ))}
      {uudised.length < 1 && <div>Uudiseid ei ole, mine parem jalutama!</div>}
    </div>
  );
}

export default Uudised;
