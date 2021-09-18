import React, { useEffect, useState, Component } from 'react'
import Table from './Table'
import Form from './Form'
import config from './config'
import Firebase from 'firebase'
import employees from './employees'



function App({ query }) {
  
  
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch(
        `/employees?q=${encodeURIComponent(query)}`
      );
      const fetchedEmployees = await response.json(response);
      setEmployees(fetchedEmployees);
    }
    fetchEmployees();
  }, [query]);

  return (
    <div>
      {employees.map(name => <div>{name}</div>)}
    </div>
  );
}
export default App