import React from "react";

function Avaleht() {
  const computers = JSON.parse(localStorage.getItem("laptops")) || [];
  
  const addToCart = (oneComputer) => {
    const computers = JSON.parse(localStorage.getItem("cartLaptops")) || [];
    computers.push(oneComputer);
    localStorage.setItem("cartLaptops", JSON.stringify(computers));
  }

  return (
    <div className="avaleht-tekst">
      <div>Tere</div>
      <div>Siin lehel saad sülearvuteid vaadata ja lisada</div> <br />
      {computers.map(oneComputer =>
        <div>
          <div>{oneComputer.mark}</div>
          <div>{oneComputer.mudel}</div>
          <div>{oneComputer.maksumus}</div>
          <button onClick={()=>addToCart(oneComputer)}>Lisa ostukorvi</button>
        </div>
        )}
    </div>
  );
}

export default Avaleht;
