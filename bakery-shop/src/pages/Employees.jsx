import { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";


function Employees() {

  const [allEmployees, setAllEmployees] = useState([]);
  const idRef=useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const avatarRef = useRef();
  var validator = require('validator');

  
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then(res=>res.json())
      .then(data=>setAllEmployees(data.data || []))
  }, []);

  const addEmployee = () => {
    allEmployees.push({
      "id": Number(idRef.current.value),
      "email": emailRef.current.value,
      "first_name": firstNameRef.current.value,
      "last_name": lastNameRef.current.value,
      "avatar": avatarRef.current.value
    })
    setAllEmployees(allEmployees.slice());
    console.log(allEmployees)
    // TODO: Add validations
  }

  const deleteEmployee = (index) => {
    setAllEmployees(allEmployees.splice(index, 1));
    setAllEmployees(allEmployees.slice());
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
            <td><img src={employee.avatar} alt="" /></td>
            <td><Button onClick={()=>deleteEmployee(index)} type="button" variant="danger">Delete</Button></td>         
         </tr> 
          )}
        
        <tr className="input-row">
          <td><input ref={idRef} type="number" placeholder="ID" className="form-control"/></td>
          <td>
            <input ref={firstNameRef} type="text" placeholder="First name" className="form-control"/>
            <input ref={lastNameRef} type="text" placeholder="Last name" className="form-control"/>
          </td>
          <td><input ref={emailRef} type="text" placeholder="Email" className="form-control"/></td>
          <td><input ref={avatarRef} type="text" placeholder="Avatar" className="form-control"/></td>
          <td><Button onClick={addEmployee} type="submit" variant="success">Add</Button></td>
        </tr>
        </tbody>
      </Table>
    </div>

  </div>)
}

export default Employees;