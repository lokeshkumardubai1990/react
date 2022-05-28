import { useEffect, useRef, createRef, useState } from "react";
import Childref from "./child";
const Usereffunc = () => {
  const inputRef = useRef([]);
  useEffect(() => {
    // inputRef.current[0].focus();
  }, []);
  return (
    <>
      <br />
    </>
  );
};

export default Usereffunc;
