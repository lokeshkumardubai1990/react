import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  /*Arrow function */
  thisKey = () => {
    console.log(this);
  };

  /*variables*/

  variables = () => {
    var ab = "test";

    if (ab === "test") {
      let ab = "Let key";
      console.log(ab);
    }
    console.log(ab);
  };

  destructuring = () => {
    const empDetails = ["John", "8956", "Sr Engineer"];

    const [empName, empId, designation] = empDetails;
    console.log(empName, empId, designation);
    const empData = {
      name: "John",
      employeeId: "8956",
      designation: "Sr Engineer",
      experience: 10,
      bloodGroup: "B Positive",
    };

    const { name, employeeId, bloodGroup } = empData;
    console.log(name, employeeId, bloodGroup);
  };

  spreadFunction = () => {
    const classComp = ["state", "constructor", "render"];
    const funcComp = ["props", "useEffect", "return"];
    const mergeComp = [...classComp, ...funcComp];
    // console.log(mergeComp);

    const personalDetails = { name: "Peter", age: 32 };
    const officeDetails = { officeName: "Google", location: "USA" };
    // old way

    const mergeObj = Object.assign(personalDetails, officeDetails);
    const newWayofMerget = { ...personalDetails, officeDetails };
    const copyPersonalDetails = { ...personalDetails };
    personalDetails.name = "John";
    console.log(personalDetails, copyPersonalDetails);
  };

  render() {
    const mapArray = {
      data: [
        {
          one: "onedata",
          two: "twodata",
          three: "threedata",
          four: "fourdata",
        },
        {
          one: "oneObjdata",
          two: "twoObjdata",
          three: "threeObjdata",
          four: "fourObjdata",
        },
      ],
    };
    return (
      <div>
        <div>
          <button className="btn btn-primary" onClick={this.thisKey}>
            This Key
          </button>
        </div>

        <div>
          <button className="btn btn-primary" onClick={this.variables}>
            Variables
          </button>
        </div>

        <div>
          <button className="btn btn-primary" onClick={this.destructuring}>
            Destructuring
          </button>
        </div>

        <div>
          <button className="btn btn-primary" onClick={this.spreadFunction}>
            Spread Operator
          </button>
        </div>
        <ul>
          {mapArray.data.map((item, index) => {
            return (
              <li key={index}>
                {item.one} {item.two}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
