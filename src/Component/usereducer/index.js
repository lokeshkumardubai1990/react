import React, { useState, useReducer } from "react";

const initialstate = { count: 0, addTodo: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };

    case "addtodo":
      return {
        ...state,
        addTodo: state.addTodo.concat(action.payLoad),
      };
    default:
      return state;
  }
};

export default function Usereducerhook() {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const addTodo = () => {
    dispatch({ type: "addtodo", payLoad: state.count });
  };
  return (
    <div>
      <button onClick={decrement}>Decrement</button>
      {state.count}
      <button onClick={increment}>Increment</button>
      <br />
      <hr />
      {console.log(state.addTodo)}
      <button onClick={addTodo}>Add todo</button>
    </div>
  );
}
