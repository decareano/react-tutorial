import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
      {
        name: 'Marcelo',
        job: 'Developer',
      },
      {
        name: 'Bob',
        job: 'Teacher',
      },


    ]

    return (
      <div className="container">
        <Table charData={characters} />
      </div>
    )
  }
}

export default App