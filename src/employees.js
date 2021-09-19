import React from 'react'
//import ReactDOM from 'react-dom'

const Employees = (props) => {
    const {employeeList} = props

    return (
        <Employees >
           employeeList={employeeList}
        </Employees >
    )


}

export default Employees


//employeeList is the props that passes the data 

// const employees = [
//     {Id:101,Name:'Abhinav',Location:'Bangalore',Salary:12345},
//     {Id:102,Name:'Abhishek',Location:'Chennai',Salary:23456},
//     {Id:103,Name:'Ajay',Location:'Bangalore',Salary:34567}
// ]

// function DisplayEmployees(props) {
//     const empList=props.employeeList
//     console.log(empList)
//     const listElements=empList.map((emp) =>
//         <Employee key={emp.Id} data={emp}></Employee>
//     )
//     return(
//         <div>
//             {listElements}
//         </div>
//     )
// }


    
// const element = <DisplayEmployees employeeList={employees}></DisplayEmployees> 
    
// ReactDOM.render(
//     <element />, 
//     document.getElementById("root")
// )




    
  
  