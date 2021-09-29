import React from 'react'
import DisplayEmployees from './DisplayEmployees'

// this code works on browser but renders NO DATA
// argument destructuring
const Employees = ({ employeeData }) => {
    
    return (
       <DisplayEmployees employeeData={employeeData}  />
    )
}

export default Employees
