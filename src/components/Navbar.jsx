import React from "react";
import "./Home.css"

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="top-nav">
          <a href="/"> Sarvesh Dhangar </a>
          <button className="submit-btn" type="submit">
            Send message
          </button>
          {/* <a href="/"> Projects </a>
          <a href="/">Experience</a>
          <a href="/"> Contact </a> */}
        </div>
      </nav>
    </div>
  );
}
