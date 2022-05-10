import React, { useState } from "react";

const Functioncomp = (props) => {
  const [name, setName] = useState("Peter");

  const changeName = () => {
    setName("Lokesh");
  };

  return (
    <div>
      <p>Functional Component {name}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default Functioncomp;
