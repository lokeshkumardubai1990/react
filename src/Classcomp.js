import React, { createRef } from "react";
import { connect } from "react-redux";
import { changeName, fechtData } from "./store/actions";
// import { apiData } from "./store/actions";

const apiData = (apiUrl) => {
  return (dispatch) => {
    return fetch(apiUrl)
      .then((resposne) => {
        dispatch(fechtData(resposne));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

class Classcomp extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    console.log(this.props);
  }

  componentDidMount() {
    //this.apiData("https://api.github.com/users/KrunalLathiya");
  }

  render() {
    return (
      <div>
        UserName : {this.props.userName}
        <br />
        <input ref={this.inputRef} />
        <button
          className="btn btn-primary"
          onClick={() => this.props.changeName(this.inputRef.current.value)}
        >
          Change Name
        </button>
        <br />
        <hr />
        <ul>
          {this.props.todoList.map((data, index) => {
            return <li key={index}>{data}</li>;
          })}
        </ul>
        <br />
        <br />
        <button onClick={this.props.fetchData}>GET Data from API</button>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  console.log(state);
  return {
    userName: state.userDetails.userName,
    todoList: state.todo.todoList,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    changeName: (data) => dispatch(changeName(data)),
    fetchData: () =>
      dispatch(apiData("https://api.github.com/users/KrunalLathiya")),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Classcomp);
