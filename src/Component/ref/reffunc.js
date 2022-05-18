import { useEffect, useRef, createRef, useState } from "react";
import Childref from "./child";
const Usereffunc = () => {
  const inputRef = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    inputRef.current = "Test";
  }, []);

  useEffect(() => {
    console.log(count, inputRef.current);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </>
  );
};

export default Usereffunc;
