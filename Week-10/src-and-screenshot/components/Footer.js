import React from "react";

export default function Foorter(props) {
  return (
    <div className="footer">
      {/* left section only title */}
      <h1>Shortly</h1>
      {/* middle section all options and links */}
      <section className="footer--options">
        <ul>
          <li className="options-title">Features</li>
          <li>
            <a href="#">Link shortner</a>
          </li>
          <li>
            <a href="#">Branded Links</a>
          </li>
          <li>
            <a href="#">Analysis</a>
          </li>
        </ul>
        <ul>
          <li className="options-title">Resources</li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
        <ul>
          <li className="options-title">Company</li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Our Teams</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </section>
      {/* right section only login options */}
      <div className="footer--login">
        <a href="#"> Login</a>
        <a href="#">Sign up</a>
      </div>
    </div>
  );
}
