import React from 'react'
import ReactDOM from 'react-dom'

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
//employeeList is the props that passes the data 

const employees = [
    {Id:101,Name:'Abhinav',Location:'Bangalore',Salary:12345},
    {Id:102,Name:'Abhishek',Location:'Chennai',Salary:23456},
    {Id:103,Name:'Ajay',Location:'Bangalore',Salary:34567}
]

function DisplayEmployees(props) {
    const empList=props.employeeList
    console.log(empList)
    const listElements=empList.map((emp) =>
        <Employee key={emp.Id} data={emp}></Employee>
    )
    return(
        <div>
            {listElements}
        </div>
    )
}


    
const element = <DisplayEmployees employeeList={employees}></DisplayEmployees> 
    
ReactDOM.render(
    <element />, 
    document.getElementById("root")
)
    
  
  