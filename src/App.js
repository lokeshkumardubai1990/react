import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myName: "John",
      showHome: true,
    };

    // console.log("Constructor......... From Parent", this.state.myName);
  }

  // componentWillMount() {
  //   this.setState({ myName: "Peter" }, () => {
  //     console.log("componentWillMount......... From Parent", this.state.myName);
  //   });
  // }

  changeName = () => {
    this.setState({ myName: "Marvel Avenger" });
  };

  getName = () => {
    console.log(this.state.myName);
  };

  mountUnmount = () => {
    this.setState({ showHome: !this.state.showHome });
  };

  render() {
    console.log(this);
    return (
      <div>
        {/* {this.state.myName} */}
        {/* {this.state.showHome ? <Home name={this.state.myName} /> : null} */}
        <div>
          <button className="btn btn-primary" onClick={this.changeName}>
            Change Name
          </button>
          <br />
          <button className="btn btn-primary" onClick={this.getName}>
            Get Name
          </button>
          <div>
            <button className="btn btn-warning" onClick={this.mountUnmount}>
              (Un) Mount
            </button>
          </div>
        </div>
      </div>
    );
  }

  // componentDidMount() {
  //   // this.setState({ myName: "Avenger" }, () => {
  //   //   console.log("componentDidMount......... From Parent", this.state.myName);
  //   // });

  //   console.log("componentDidMount ..... From Parent");
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "shouldComponentUpdate......... From Parent",
  //     nextProps,
  //     nextState
  //   );
  //   if (nextState.myName === "Avenger") {
  //     return false;
  //   }
  //   return true;
  // }

  // componentWillUpdate() {
  //   console.log("componentWillUpdate........ From Parent");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate........ From Parent");
  // }
}

export default App;
