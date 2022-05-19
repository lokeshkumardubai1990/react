const initialState = { userName: "John" };

const Reducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "changeUserName":
      return {
        ...state,
        userName: action.payLoad,
      };

    default:
      return state;
  }
};

export default Reducer;
