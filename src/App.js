import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentWord: [],
      reversedWord: []
    };
  }

  handleChange = (event) => {
    this.setState({
      currentWord: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault();
  }
  render() {
    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} placeholder='enter word here' name="currentWord" id="" />
          <input type="submit"/>
          <div className="pal-reveal">
            Your word: <span>{this.state.currentWord}</span>
            <span className="reversed-word"></span>
          </div>
        </form>
      </>
    );
  }
}

export default App;
