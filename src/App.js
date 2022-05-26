import React from "react";
import "./App.css";
import Classcomp from "./Classcomp";
import Functioncomp from "./Functioncomp";
import Usereffunc from "./Component/ref/reffunc";

export default function App() {
  return (
    <main className="mainComp">
      <h2>Welcome to Redux...</h2>
      <Classcomp data="test" />
      <hr />
      <Functioncomp />
      <hr />
      <Usereffunc />
    </main>
  );
}
