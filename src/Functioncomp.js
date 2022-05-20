import React from "react";
import { connect } from "react-redux";
import { changeUserName } from "./store/actions";
import { useSelector, useDispatch } from "react-redux";

//useselector act as mapstatetoprops
//useDispatch act as mapdispatchprops

function Functioncomp(props) {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  return (
    <div>
      Name from Functional compoent : {state.userName}
      <br />
      <button onClick={() => dispatch(changeUserName("Mohan Functional comp"))}>
        Change Username
      </button>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     userName: state.userName,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeNname: (name) => dispatch(changeUserName(name)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Functioncomp);

export default Functioncomp;
