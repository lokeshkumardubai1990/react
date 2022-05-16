import React, { createRef } from "react";

class Refclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.inputRef = createRef();
  }

  //   handleChange = (e) => {
  //     this.setState({ value: e.target.value });
  //   };

  getValue = () => {
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <>
        <input ref={this.inputRef} />
        <button onClick={this.getValue}>get value</button>
      </>
    );
  }
}

export default Refclass;
