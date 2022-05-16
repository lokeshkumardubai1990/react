import { useState, useCallback } from "react";
import Child from "./child";

const Usecallbackfunction = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(30);

  const numbers = useCallback(() => {
    return [count, count + 1, count + 2];
  }, [count]);
  return (
    <>
      <Child items={numbers} />
      {count}
      <button onClick={() => setCount(count + 1)}>Count change</button>
      <br />
      <hr />
      <button onClick={() => setAge(age + 1)}>Age change</button>
    </>
  );
};

export default Usecallbackfunction;
