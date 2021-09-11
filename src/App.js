import React, { useEffect, useState } from 'react'
import Table from './Table'
import Form from './Form'
import config from './config'
import Firebase from 'firebase'






function App() {
  // Declare a new state variable, which we'll call "count"...could be any name
  // why the square brackets below? 
  // not part of the API; call it whatever you want
  // the [car, setCar] is an array: car[0] and setCar[1]...ditto for year
  const [car, setCar] = useState("Ford")
  const [year, setYear] = useState("2008")
  const [count, setCount] = useState(0)
  
  function WantToUpdate() {
    setCar("Chevy")
    setYear("2005")
    setCount(count + 1)
  }
  useEffect(() => {
    document.title = `You made ${count} updates`
  })
  

  return (
    <div>
    <p>Your car is a {car} {year} </p>
    <p>You clicked {count} times</p>
    <button onClick={ WantToUpdate } >
      Click me
    </button>
    
    </div>
  )
}

export default App