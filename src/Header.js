import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div>
        <ul className="nav">
          <li>
            <img
              className="logo"
              src="https://i.pinimg.com/474x/38/b1/0d/38b10d5939ce4c335f64f986f89a1676.jpg"
              alt="web-logo"
            />
          </li>
          <li>Home</li>
          <li>Shows</li>
          <li>Movies</li>
          <li>Recently Added</li>
          <li>My List</li>
        </ul>
      </div>

      <div className="nav">
        <img
          className="avatar"
          src="https://i.pinimg.com/originals/72/a2/0a/72a20a5f989b3a8b465df1b27fdacb67.jpg"
          alt="header-avatar"
        />
      </div>
    </header>
  );
}

export default Header;
