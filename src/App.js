import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
import config from './config'
import Firebase from 'firebase'



class App extends Component {
  constructor(props) {
    super(props)
    Firebase.initializeApp(config);
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    this.getUserData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    Firebase.database()
      .ref("/")
      .set(this.state);
    console.log("DATA SAVED");
  };

  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
      console.log("Data in")
    });
  };

  removeCharacter = (index) => {
    const {characters} = this.state
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  render() {
    const { characters } = this.state
    return (
      <div className="container">
      <Table characterData={characters} removeCharacter={this.removeCharacter} />
      <Form handleSubmit={this.handleSubmit} />
      </div> 
    )
  }

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }
}




export default App