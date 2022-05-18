import { ACTIONS } from "../actionTypes";
import { combineReducers } from "redux";
const initialstate = { userName: "Initial Name" };

const userDetails = (state = initialstate, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE:
      return {
        ...state,
        userName: action.payLoad,
      };
    case ACTIONS.FETCHDATA:
      return {
        ...state,
        apiRes: action.payLoad,
      };
    default:
      return state;
  }
};

//second reducer

const initialTodo = { todoList: ["Vivek", "Mohan"] };

const todo = (state = initialTodo, action) => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todoList: action.payLoad,
      };
    default:
      return state;
  }
};

export default combineReducers({ userDetails, todo });
