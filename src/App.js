import React from "react";
import "./App.css";
import Classcomp from "./Classcomp";
import Functioncomp from "./Functioncomp";

export default function App() {
  return (
    <main className="mainComp">
      <h2>Welcome to Redux...</h2>
      <Classcomp />
      <hr />
      <Functioncomp />
    </main>
  );
}
