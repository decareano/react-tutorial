import React from 'react'


const EmpHeader = () => {
    return (
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Location</th>
          <th>Salary</th>
        </tr>
      </thead>
    )
  }

  const EmpBody = (props) => {
    
    // const list = props.employeeData.map((emp) => {
    //     return (
            
    //         <tr key={emp.Id} data={emp}>
    //             {/* <td>{row.id}</td>
    //             <td>{row.name}</td>
    //             <td>{row.location}</td>
    //             <td>{row.salary}</td> */}
    //         </tr>
            
    //     )
    // })
    
    return (
        <tbody></tbody>
    )
     
    
  }


const Employees = (props) => {
        // // passing the props from app.js. 
        // props name is employeeData so it's assigned to props
        const {employeeData} = props
    return (
        // if I put a div it works as well
        <employee>
            <EmpHeader />
            <EmpBody employeeData={employeeData} />
        
        </employee>
    )
}

export default Employees
