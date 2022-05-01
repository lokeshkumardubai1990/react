import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }
  /*mounting component before render method*/

  componentWillMount() {
    alert("Component will mount called");
  }

  componentDidMount() {
    alert("after mounting will call componentdidmount");
  }
  render() {
    return (
      <div className="App">
        <h1>Welcom to react learning</h1>
        {alert("Render method called")}
      </div>
    );
  }
}

export default App;
