import React from 'react'

const DisplayEmployees = (props) => {
    const list = props.employeeData
    console.log(list)
    const listElements = list.map((emp) =>
        <Employee key={emp.name}  data={emp} ></Employee>
        
        
    )
    console.log(listElements)
    return (
        <div>
        {listElements}
    </div>
    )
}

function Employee(props) {
     return <div style={{border:"3px solid red"}}>

        <p>Employee ID : <b>{props.data.Id}</b></p>
        <p>
        <label>Employee Name : <b>{props.data.Name}</b></label>
    </p>

    <p>
        <label>Employee Location : <b>{props.data.Location}</b></label>
    </p>

    <p>
        <label>Employee Salary : <b>{props.data.Salary}</b></label>
    </p>

    </div>;

   
}
// this code works on browser but renders NO DATA
const Employees = (props) => {
    const {employeeData} = props
    
    return (
       
    <DisplayEmployees employeeData={employeeData}  />
   
    )
}



 
    
    



// const Employees = (props) => {
//         // // passing the props from app.js. 
//         // props name is employeeData so it's assigned to props
//         const {employeeData} = props
//     return (
//         // if I put a div it works as well
//         <employee>
//             <HtmlEmp />
//             <EmpBody employeeData={employeeData} />
        
//         </employee>
//     )
// }

export default Employees
