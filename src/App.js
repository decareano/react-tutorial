import React, { useEffect, useState, Component } from 'react'
// import Table from './Table'
// import Form from './Form'
// import config from './config'
// import Firebase from 'firebase'
import Employees from './Employees'



function App(query) {
  
  const pinga = [
    {Id:101,Name:'Abhinav',Location:'Bangalore',Salary:12345},
    {Id:102,Name:'Abhishek',Location:'Chennai',Salary:23456},
    {Id:103,Name:'Ajay',Location:'Bangalore',Salary:34567}
  ]
  const [Employees, setEmployees] = useState([]);

  
  function DisplayEmployees(props) {
    const empList=props.employeeList
    
    const listElements=empList.map((emp) =>
        <Employees key={emp.Id} data={emp}></Employees>
    )
    return(
        <div>
            {listElements}
        </div>
    )
  } 

  function Employee(props) {
    return <div style={{border:"3px solid red"}}>
   
    <p>
        <label>Employee ID : <b>{props.data.Id}</b></label>
    </p>
    <p>
        <label>Employee Name : <b>{props.data.Name}</b></label>
    </p>

    <p>
        <label>Employee Location : <b>{props.data.Location}</b></label>
    </p>

    <p>
        <label>Employee Salary : <b>{props.data.Salary}</b></label>
    </p>
    </div>
  }
  return (
    <div>
     <Employees employeeList={Employees}></Employees> 
    </div>
  );
}
export default App