import { useState, useEffect } from "react";

const Child = (props) => {
  const [numbers, setNumbers] = useState([]);
  useEffect(() => {
    console.log("Render...");
    setNumbers(props.items());
  }, [props.items]);
  return (
    <>
      <p>Child component</p>
    </>
  );
};

export default Child;
