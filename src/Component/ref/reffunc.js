import { useEffect, useRef } from "react";
import Childref from "./child";
const Usereffunc = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current = "Test";
  }, []);
  const getValue = () => {
    console.log(inputRef.current);
  };
  return (
    <>
      <input ref={inputRef} />
      <button onClick={getValue}>get Value</button>
    </>
  );
};

export default Usereffunc;
