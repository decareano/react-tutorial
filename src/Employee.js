import React from 'react'

function Employee(props) {
    return (
    <div style={{border:"3px solid red"}}>

       <p>Employee ID : <b>{props.data.id}</b></p>
       <p>
        Employee Name : <b>{props.data.name}</b>
       </p>

       <p>
        Employee Location : <b>{props.data.location}</b>
       </p>

       <p>
        Employee Salary : <b>{props.data.salary}</b>
      </p>

    </div>);

  
}

export default Employee