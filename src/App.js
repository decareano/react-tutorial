import React, { useEffect, useState, Component } from 'react'


import Employees from './Employees'



function App() {
   
    const employees = [
      {
    id: '101',
    name: 'Bob',
    location: 'Nebraska',
    salary: '60000'
      },
      {
    id: '102',
    name: 'Chas',
    location: 'Iowa',
    salary: '70000'
      },
      {
    id: '103',
    name: 'Laura',
    location: 'Nevada',
    salary: '80000'
      },
      {
    id: '104',
    name: 'John',
    location: 'Vermont',
    salary: '60000'
      }
    ]
  
  

  return (
    <div className="container">
      {/* // props name is employeeData....can be whatever you want. the expression is the data contained in the employees array
      and it needs to be passed to the other side (employees.js*/}
      <Employees employeeData={employees}/>

    </div>
  );
}
export default App