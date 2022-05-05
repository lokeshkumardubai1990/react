import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
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
        <button className="btn btn-primary" onClick={this.ternaryFunction}>
          Tern Function
        </button>
      </div>
    );
  }
}

export default Home;
