import { ACTIONS } from "../../store/actionTypes";
const initialState = { userName: "John" };

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE:
      return {
        ...state,
        userName: action.payLoad,
      };

    default:
      return state;
  }
};

export default Reducer;
