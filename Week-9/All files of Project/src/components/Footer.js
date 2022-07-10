import React from "react";

export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        <small>Copyright Ⓒ {year}</small>
      </p>
    </footer>
  );
}
