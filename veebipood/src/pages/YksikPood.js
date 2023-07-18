import React from "react";
import poedFailist from "../data/poed.json";
import { useParams } from "react-router-dom";

function YksikPood() {
  const { yksPood } = useParams();
  const leitud = poedFailist.find(
    (pood) => pood.nimi.toLocaleLowerCase().replaceAll(" ", "-").replaceAll("ü, u") === yksPood);


    // replaceAll -asendab kõik
    // replace - asendab esimese

  // jrk nr alusel: const leitud=poedFailisit[index]
  // omaduse alusel (nt nimi), siis .find() tsüklit

  return (
    <div>
      {leitud !== undefined && (
        <div>
          <div>Poe nimi: {leitud.nimi}</div>
          <div>Telefon: {leitud.tel}</div>
          <div>Avatud: {leitud.aeg}</div>
        </div>
      )}

      {leitud === undefined && <div>Sellist poodi ei leitud</div>}
    </div>
  );
}

export default YksikPood;
