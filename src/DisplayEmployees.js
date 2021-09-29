import React from 'react'
import  Employee from './Employee'

const DisplayEmployees = (props) => {
    const rows = props.employeeData
    console.log(rows)
    // map takes two args: first is element itself, second is index; emp represents first employee object
    const listElements = rows.map((emp) =>
        <Employee key={emp.id}  data={emp} />
        //<p>Hello,  {row.id} {row.name} {row.location} {row.salary}</p>
       
    )
    console.log(listElements)
    return (
        <div>
            {listElements}
        </div>
    )
}

export default DisplayEmployees