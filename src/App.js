import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentWord: '',
      reversedWord: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      currentWord: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    let revs = this.state.currentWord.split('').reverse().join('')
    this.setState({
      currentWord: '',
      reversedWord: revs
    })
  }

  palindronCheck = () => {
    if(this.state.currentWord === this.state.reversedWord.split('').reverse().join('')){
      return(
        <p>{this.state.reversedWord}</p>
      )
    }
    else {
      return(
        <p>Not A Palindrome!</p>
      )
    }
  }
  render() {
    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} placeholder='enter word here' name="currentWord" id="" />
          <input onClick={this.palindronCheck} type="submit"/>
          <div className="reveal">
            Your first word: <span>{this.state.currentWord}</span>
            Your second word: <span className="reversed-word">{this.palindronCheck()}</span>
          </div>
        </form>
      </>
    );
  }
}

export default App;
