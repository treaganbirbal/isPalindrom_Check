import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      firstWord: '',
      secondWord: '',
      submitted: false,
    };
  }

  handleFirstWordChange = (event) => {
    this.setState({
      firstWord: event.target.value
    })
  }
  handleSecondWordChange = (event) => {
    this.setState({
      secondWord: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    let original = this.state.firstWord;
    let revs = this.state.secondWord;
    this.setState({
      firstWord: original,
      secondWord: revs,
      submitted: true
    })
  }

  palindronCheck = () => {
    if(this.state.firstWord === this.state.secondWord.split('').reverse().join('')){
      return(
        <p>These words are Palindrome</p>
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
        <form action="" onSubmit={this.handleSubmit} onClick={this.palindronCheck}>
          <input type="text" onChange={this.handleFirstWordChange} placeholder='enter first word here' name="currentWord" id="" />
          <input type="text" name="enter second word here" id="" onChange={this.handleSecondWordChange}/>
          <input  type="submit" />
          <div className="reveal">
            Your first word: <span>{this.state.firstWord}</span>
            Your second word: <span className="reversed-word">{this.state.secondWord}</span>
          </div>
        </form>
        { this.state.submitted && this.state.firstWord === this.state.secondWord.split('').reverse().join('') ?
          <h1>These words are Palindrome</h1> : <h1>These words are not Palindrome</h1>
        }
        </>
    );
  }
}

export default App;
