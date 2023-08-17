import { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import validator from 'validator';

function Employees() {
  const [dbEmployees, setDbEmployees] = useState([]) 
  const [allEmployees, setAllEmployees] = useState(JSON.parse(localStorage.getItem("employees") || "[]"));
  const [message, setMessage] = useState("")
  const [idUnique, setIdUnique] = useState(false);
  const idRef=useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const avatarRef = useRef();
  
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then(res=>res.json())
      .then(data=>{
        setDbEmployees(data.data || []);
        setAllEmployees(JSON.parse(localStorage.getItem("employees")|| [])) 
      })
  }, []);

  const addEmployee = () => {
    if (validator.isEmpty(idRef.current.value)) {
      setMessage("ID cannot be left empty")
      return;
    }

    if (validator.isEmpty(firstNameRef.current.value) || validator.isEmpty(lastNameRef.current.value)) {
      setMessage("Name cannot be left empty")
      return;
    }

    if (!validator.isAlpha(firstNameRef.current.value)||!validator.isAlpha(lastNameRef.current.value)) {
      setMessage("Name must contain only letters")
      return;
    }

    if (validator.isEmpty(emailRef.current.value)) {
      setMessage("E-mail cannot be left empty")
      return;
    }

    if (!validator.isEmail(emailRef.current.value)) {
      setMessage("Please add a valid e-mail address")
      return;
    }

    if (validator.isEmpty(avatarRef.current.value)) {
      setMessage("Avatar cannot be left empty")
      return;
    }
    
    allEmployees.push({
      "id": Number(idRef.current.value),
      "email": emailRef.current.value,
      "first_name": firstNameRef.current.value,
      "last_name": lastNameRef.current.value,
      "avatar": avatarRef.current.value
    })
    localStorage.setItem("employees", JSON.stringify(allEmployees))
    setAllEmployees(allEmployees.slice());
    setMessage(firstNameRef.current.value + " " + lastNameRef.current.value + " added!")
  }

  const deleteEmployee = (index) => {
    allEmployees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(allEmployees))
    setAllEmployees(allEmployees.slice());
  }

  const checkIdUniqueness = () => {
    const result = allEmployees.filter(employee => employee.id === Number(idRef.current.value));
    if (result.length === 0) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }
  }

  const getDbEmployees = () => {
    setAllEmployees(dbEmployees.slice());
    console.log(dbEmployees)
    localStorage.setItem("employees", JSON.stringify(allEmployees))
  }

  return (<div>
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Avatar</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
          {allEmployees.map((employee, index) => 
          <tr key={index}>
            <td className="first">{employee.id}</td>
            <td>{employee.first_name + " " + employee.last_name}</td>
            <td>{employee.email}</td>
            <td><img className="avatar" src={employee.avatar} alt="" /></td>
            <td><Button onClick={()=>deleteEmployee(index)} type="button" variant="danger">Delete</Button></td>         
         </tr> 
          )}
        
        <tr className="input-row">
          <td><input ref={idRef} onChange={checkIdUniqueness} type="number" placeholder="ID" className="form-control"/></td>
          <td>
            <input ref={firstNameRef} type="text" placeholder="First name" className="form-control"/>
            <input ref={lastNameRef} type="text" placeholder="Last name" className="form-control"/>
          </td>
          <td><input ref={emailRef} type="text" placeholder="Email" className="form-control"/></td>
          <td><input ref={avatarRef} type="text" placeholder="Avatar" className="form-control"/></td>
          <td><Button disabled={!idUnique} onClick={addEmployee} type="submit" variant="success">Add</Button></td>
        </tr>
        </tbody>
      </Table>
      <div>{message}</div> <br />
      <button onClick={getDbEmployees}>Reset employees</button>
    </div>

  </div>)
}

export default Employees;