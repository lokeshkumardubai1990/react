import React from "react";

import { connect } from "react-redux";
import { ACTIONS } from "./store/actionTypes";
import { changeUserName } from "./store/actions";

class Classcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Class Component",
    };
  }

  render() {
    return (
      <div>
        Welcome : <b>{this.props.userName}</b> &nbsp;
        <button onClick={() => this.props.changeName(this.state.name)}>
          Class Component
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
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
