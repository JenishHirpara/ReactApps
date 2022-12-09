import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    string: "",
    length: 0,
  };

  clickHandler = (index) => {
    let input = this.state.string.split("");
    input.splice(index, 1);
    const input2 = input.join("");
    this.setState({
      string: input2,
    });
  };

  inputChangedHandler = (event) => {
    const length = event.target.value.length;
    this.setState({
      length: length,
      string: event.target.value,
    });
  };

  render() {
    var letter = null;

    if (this.state.string !== "") {
      const array = this.state.string.split("");
      letter = array.map((l, index) => (
        <CharComponent
          letter={l}
          key={index}
          click={() => this.clickHandler(index)}
        />
      ));
    }

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.string}
        />
        <p>{this.state.length}</p>
        <ValidationComponent length={this.state.length} />
        {letter}
      </div>
    );
  }
}

export default App;
