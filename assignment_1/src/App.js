import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "Mihir",
  };

  nameChangedHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          change={this.nameChangedHandler}
          name={this.state.username}
        />
        <UserOutput name={this.state.username} />
        <UserOutput name="Jenish" />
        <UserOutput name="Vatsal" />
      </div>
    );
  }
}

export default App;
