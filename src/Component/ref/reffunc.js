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
      {[0, 1, 2].map((index) => {
        return (
          <input
            id={index}
            key={index}
            ref={(e) => (inputRef.current[index] = e)}
          />
        );
      })}
      <table>
        <tbody>
          <th>Id</th>
          <th>Name</th>
          <th>Action</th>
          <tr>
            <td>1</td>
            <td>Lokesh</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Usereffunc;
