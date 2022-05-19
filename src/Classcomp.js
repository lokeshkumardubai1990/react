import React from "react";

import { connect } from "react-redux";

class Classcomp extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        Welcome {this.props.userName} &nbsp;
        <button onClick={this.props.changeName}>Change Name</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => dispatch({ type: "changeUserName", payLoad: "Peter" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Classcomp);
