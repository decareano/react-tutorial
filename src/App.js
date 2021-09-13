import React, { useEffect, useState, Component } from 'react'
import Table from './Table'
import Form from './Form'
import config from './config'
import Firebase from 'firebase'

const Instagram = require('instagram-web-api')



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

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    chatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
      return function cleanup() {
      chatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}


export default App