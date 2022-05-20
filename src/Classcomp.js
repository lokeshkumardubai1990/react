import React from "react";

import { connect } from "react-redux";
import { ACTIONS } from "./store/actionTypes";
import { changeUserName } from "./store/actions";

class Classcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mohan Class",
    };
  }

  render() {
    return (
      <div>
        Welcome {this.props.userName} &nbsp;
        <button onClick={() => this.props.changeName(this.state.name)}>
          Change Name
        </button>
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
    changeName: (name) => dispatch(changeUserName(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Classcomp);
