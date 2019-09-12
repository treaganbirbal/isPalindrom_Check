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
  render() {
    return (
      <>
        <form action="">
          <input type="text" placeholder='enter word here'name="currentWord" id="" />
          <div className="pal-reveal">
            <span></span>
            <span className="reversed-word"></span>
          </div>
        </form>
      </>
    );
  }
}

export default App;
