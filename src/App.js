import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import "./App.css";
import Home from "./Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "John",
      showHome: true,
    };
    console.log("Constructor");
  }

  componentWillMount() {
    console.log("component will mount");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("component will receive props", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldcomponent update", nextProps, nextState);
    return true;
  }

  componentWillUpdate() {
    console.log("componentwill update");
  }

  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }

  changeUserName = () => {
    this.setState({ userName: "Peter" });
  };

  removeHome = () => {
    this.setState({ showHome: !this.state.showHome });
  };

  render() {
    let showHH = "";
    if (this.state.showHome) {
      showHH = (
        <Home
          changeUserName={() => this.changeUserName}
          removeHome={() => this.removeHome}
        />
      );
    }
    return (
      <div className="App">
        <h1>Welcom {this.state.userName}</h1>
        {showHH}
        <button onClick={this.removeHome}>Show & Remove Home component</button>
      </div>
    );
  }
}

export default App;
