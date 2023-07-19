import React, { useState } from "react";
import usersFile from "../users.json";

function Kasutajad() {
  const [users, updateUsers] = useState(usersFile);

  const showAll = () => {
    updateUsers(usersFile); 
  }

  const showUsernamesLongerThan10 = () => {
    const result = users.filter(user=> user.username.length >= 10);
    updateUsers(result);
  }

  const deleteUser = (id) => {
    users.splice(id, 1);
    updateUsers(users.slice());
  }

  const indexOfFistLucio = () => {
    const resultLucio =  users.find(user => user.email === "Lucio_Hettinger@annie.ca");
    console.log(resultLucio.id);
  }

  const firstWhoStartsWithC = () => {
    const resultFirstC = users.find(user => user.name.startsWith("C"));
    console.log(resultFirstC);
  }

  const SortByLat = () => {
    users.sort((a,b) => a.address.geo.lat - b.address.geo.lat)
    updateUsers(users.slice());
  }

  const filterPosLng = () => {
    const result = users.filter(user => user.address.geo.lng > 0)
    updateUsers(result);
  }

  const sumOfIds = () => {
    let sumId = 0;
    users.forEach(user => sumId = sumId + user.id);
    console.log("ID sum is "+ sumId);
  }

  const addZeros = () => {
    const updatedPhoneNumbers = users.map(user => ({...user, phone: "000-"+ user.phone}));
    updateUsers(updatedPhoneNumbers.slice());
  }

  const replaceCatchPhraseLetters = () => {
    const result = users.map(user => ({...user, company: {...user.company, catchPhrase: user.company.catchPhrase.replaceAll("a", "e")}}))
    updateUsers(result);
  }

  const allEmailsToArray = () => {
    const userEmails = [];
    users.forEach(user => userEmails.push(user.email));
    console.log(userEmails);
  }

  return (
    <div>
        Users: {users.length} <br />
        <button onClick={showAll}>0 Show all users</button> 
        <button onClick={showUsernamesLongerThan10}>1 Username more than 10 letters</button>
        <button onClick={indexOfFistLucio}>3 Index of first Lucio</button>
        <button onClick={firstWhoStartsWithC}>4 First user who starts with C</button>
        <button onClick={SortByLat}>5 Sort by latitude</button>
        <button onClick={filterPosLng}>6 Filter positive longitude</button>
        <button onClick={sumOfIds}>7 Sum of IDs</button>
        <button onClick={addZeros}>8 Add 000 to phone numbers</button>
        <button onClick={allEmailsToArray}>9 All e-mails to array</button>
        <button onClick={replaceCatchPhraseLetters}>10 Replace a with e in company catchphrase</button>



      {users.map((user, id) => (
        <div key = {id}>
          <div> ID: {user.id}</div>
          <div> Name: {user.name}</div>
          <div> Username: {user.username}</div>
          <div> E-mail: {user.email}</div>
          <div> Address: </div>
          <div> Street: {user.address.street}</div>
          <div> Suite: {user.address.suite}</div>
          <div> City: {user.address.city}</div>
          <div> Zipcode: {user.address.zipcode}</div>
          <div> Geo: </div>
          <div> Latitude: {user.address.geo.lat}</div>
          <div> Longitude: {user.address.geo.lng}</div>
          <div> Phone: {user.phone}</div>
          <div> Website: {user.website}</div>
          <div> Company: </div>
          <div> Phone: {user.phone}</div>
          <div> Company name: {user.company.name}</div>
          <div> Company catch phrase: {user.company.catchPhrase}</div>
          <div> Company business: {user.company.bs}</div>
          <button onClick={()=>deleteUser(user.id)}>Delete</button> <br />


          <br />

          
        </div>
      ))}
    </div>
  );
}

export default Kasutajad;
