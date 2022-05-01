import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    return (
      <div>
        <button onClick={this.props.changeUserName()}>Change Name</button>
      </div>
    );
  }
}

export default Home;
