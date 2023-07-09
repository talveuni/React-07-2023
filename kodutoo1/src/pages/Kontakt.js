import React, { useState } from "react";

function Kontakt() {
  const [aadress, määraAadress] = useState("Tallinn");
  const [telefon, määraTelefon] = useState("5512345");
  const [email, määraEmail] = useState("yep@yepyep.com");
  const [ingliskeelne, lehtOnIngliskeelne] = useState('ei')

function määraKontaktEng () {
  määraAadress('London');
  määraTelefon('+44589587');
  määraEmail('eng@yepyep.com');
  lehtOnIngliskeelne('jah');
} 

  return <div>
    <div>{aadress}</div>
    <div>{telefon}</div>
    <div>{email}</div>
    <br />
    <button onClick={määraKontaktEng}>Muuda ingliskeelseks</button>
{ ingliskeelne === 'jah' && <div>Leht on ingliskeelne</div> }
  </div>;
}

export default Kontakt;
