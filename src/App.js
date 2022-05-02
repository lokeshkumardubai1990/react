import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John",
    };
    console.log("Constructor Triggered", this.state.name);
    var ab = "vivek";
  }

  /*before rendering*/

  componentWillMount() {
    const ab = "test ab";
    this.setState({ name: ab });
    console.log("ComponentWillMount Triggered", this.state.name);
  }

  /*after dome render*/

  componentDidMount() {
    this.setState({ name: "Lokesh" });
    console.log("ComponentDidMount Triggered", this.state.name);
  }

  render() {
    return <div className="App">{this.state.name}</div>;
  }
}

export default App;
