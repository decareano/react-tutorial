import React from 'react'
import ReactDOM from 'react-dom';


function Employee(props) {
    //will accept the list of employees as a Paramenter (props)
    // returns a div container for employees details
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


function DisplayEmployees(props) {
    //employeeList is the prop name as in props.employeeList, it can be anything really
    const empList = props.empleadosLista
    console.log(props.empleadosLista)
    // we loop through list using map() and assign the output to a  variable (listElements)
    const listElements=empList.map((mpe) =>
        // pick a key that is unique, ie: ID and then data: defines the other properties of the object
        
        <Employee key={mpe.Id} data={mpe}></Employee>
        
    )
    return(
        <div>
            {/* //return the contents of listElements */}
            {listElements}
        </div>
    )
}

const employees = [
    {Id:101,Name:'Abhinav',Location:'Bangalore',Salary:12345},
    {Id:102,Name:'Abhishek',Location:'Chennai',Salary:23456},
    {Id:103,Name:'Ajay',Location:'Bangalore',Salary:34567}
]
    
const element = <DisplayEmployees empleadosLista={employees}></DisplayEmployees> 
    
ReactDOM.render(element, document.getElementById("root"))