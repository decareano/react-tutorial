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
    const list = props.employeeData.map((row, index) => {
        return (
            
            <tr key={index}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.location}</td>
                <td>{row.salary}</td>
            </tr>
            
        )
    })
    
    return (
        <tbody>{list}</tbody>
    )
     
    
  }


class Employees extends React.Component {
    render() {
        const {employeeData} = this.props
    

    //const {employeeData} = props

    return (
        <employee>
            <EmpHeader />
            <EmpBody employeeData={employeeData} />
        
        </employee>
    )
}
}
export default Employees
