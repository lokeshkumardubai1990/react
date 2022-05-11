import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }

  /* Arrow function */

  thisKey = () => {
    console.log(this);
  };

  // spread operator

  spreadFunction = () => {
    const classComp = ["state", "constructor", "render"];
    const funcComp = ["props", "useEffect", "return"];
    const mergeTwoarray = [...classComp, ...funcComp];
    // console.log(mergeTwoarray);

    const obj1 = { name: "peter", age: 32 };
    const obj2 = { location: "bangalore", country: "India" };
    // old way

    const mergeTwoObj = { ...obj1, ...obj2 };
    //console.log(mergeTwoObj);

    // destructuring
    const arrayNumbers = [1, 2, 3, 4, 5];

    const [one, two, ...rest] = arrayNumbers;
    console.log(...rest);
  };

  ternaryFunction = () => {
    let ab = 1;
    return ab === 3 ? console.log("true") : console.log("false");
  };

  // variables

  variablesScope = () => {
    let ab1 = "Parent";
    if (ab1 === "Parent") {
      var ab = "Child";
      console.log(ab1);
    }
    console.log(ab);
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.thisKey}>
          Arrow Function
        </button>{" "}
        <br />
        <br />
        <button className="btn btn-primary" onClick={this.spreadFunction}>
          Spread
        </button>
        <br />
        <br />
        <button className="btn btn-primary" onClick={this.ternaryFunction}>
          Tern Function
        </button>
        <br />
        <br />
        <button className="btn btn-primary" onClick={this.variablesScope}>
          Variables
        </button>
      </div>
    );
  }
}

export default Home;
