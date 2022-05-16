import React, { useState, useReducer } from "react";

const initialState = { count: 0, addTodo: [] };

const reducer = (initialState, action) => {
  switch (action.type) {
    case "add":
      return {
        ...initialState,
        count: initialState.count + 1,
      };

    case "sub":
      return {
        ...initialState,
        count: initialState.count - 1,
      };

    case "addTodo":
      return {
        ...initialState,
        addTodo: initialState.addTodo.concat(action.payLoad),
      };

    default:
      return initialState;
  }
};

export default function Usereducerfunc() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "add" });
  };

  const decrement = () => {
    dispatch({ type: "sub" });
  };

  const addTodo = () => {
    dispatch({ type: "addTodo", payLoad: state.count });
  };

  return (
    <div>
      {state.count}
      {console.log(state.addTodo)}
      <br />
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>

      <br />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}
