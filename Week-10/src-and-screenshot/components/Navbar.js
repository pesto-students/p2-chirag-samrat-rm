import React from "react";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <h1>Shortly</h1>
      <div className="navbar--options">
        <a href="#">Price</a>
        <a href="#">Features</a>
        <a href="#">Resource</a>
      </div>
      <div className="navbar--login">
        <a href="#"> Login</a>
        <a href="#">Sign up</a>
      </div>
    </div>
  );
}
