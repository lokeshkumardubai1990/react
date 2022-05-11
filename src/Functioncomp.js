import React, { useState, useEffect } from "react";

const Functioncomp = (props) => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(1);

  // two arg one is function another one is dependency []
  useEffect(() => {
    console.log("Use Effect called");
  }, [count]);

  const changeCount = () => {
    setCount(count + 1);
  };

  const changeage = () => {
    setAge(2);
  };
  return (
    <div>
      {console.log("Return called")}
      <p>Hai {count}</p>
      <button onClick={changeCount}>Change Count</button>
      <button onClick={changeage}>Change Age</button>
    </div>
  );
};

export default Functioncomp;
