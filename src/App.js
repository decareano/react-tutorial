import React, { useEffect, useState, Component } from 'react'
import Table from './Table'
import Form from './Form'
import config from './config'
import Firebase from 'firebase'





//FUNCTION COMPONENT


// function App() {
//   // Declare a new state variable, which we'll call "count"...could be any name
//   // why the square brackets below? 
//   // not part of the API; call it whatever you want
//   // the [car, setCar] is an array: car[0] and setCar[1]...ditto for year
//   const [car, setCar] = useState("Ford")
//   const [year, setYear] = useState("2008")
//   const [count, setCount] = useState(0)
  
//   function WantToUpdate() {
//     setCar("Chevy")
//     setYear("2005")
//     setCount(count + 1)
//   }
//   useEffect(() => {
//     document.title = `You made ${count} updates`
//   })
  

//   return (
//     <div>
//     <p>Your car is a {car} {year}. And you clicked {count} times</p>
   
//     <button onClick={ WantToUpdate } >
//       Click me
//     </button>
    
//     </div>
//   )
// }



function App(props) {
  //name = "marcelo"
  const message = `Hello, ${props.name}!`;   // Calculates output
  

  useEffect(() => {
    document.title = `Greetings to ${props.name}`
    }, [])
    
  return <div>{message}</div>;  
}


export default App