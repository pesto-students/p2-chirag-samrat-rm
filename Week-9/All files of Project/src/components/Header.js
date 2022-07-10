import React from "react";
import logo from "../images/Any-todo-list-logo.png.png";
export default function Header() {
  return (
    <nav className="navbar">
      <header className="header">
        <img src={logo} alt="any-logo-img" width="65px" />
        <h2>Any ToDo List</h2>
      </header>
      <a href="#">Tips</a>
    </nav>
  );
}
