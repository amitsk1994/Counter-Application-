import React, { Component } from "react";

//stateless functional component
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">{props.total}</span>
      </a>
    </nav>
  );
};
// class NavBar extends Component {
//   state = {};
//   render() {}
// }

export default NavBar;
