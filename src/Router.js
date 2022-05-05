import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Dashboard = () => {
  return <p>Dashboard component</p>;
};

const About = () => {
  return <p>About component</p>;
};

const Contact = () => {
  return <p>Contact component</p>;
};

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
class Approuter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default Approuter;
