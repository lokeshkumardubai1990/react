import React, { useState, useMemo } from "react";

export default function Usememofunc() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(30);
  const doublevalue = useMemo(() => {
    return doubleNumber(count);
  }, [count]);
  return (
    <div>
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>set count</button>

      <br />
      {age}
      <button onClick={() => setAge(age + 1)}>set age</button>
      {doublevalue}
    </div>
  );
}

function doubleNumber(num) {
  console.log("Function start....");
  for (let i = 0; i <= 10000000000; i++) {}
  console.log("Function end....");
  return num * 2;
}
