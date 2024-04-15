import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div>
        <ul className="nav">
          <li>
            <Link to="/" className="logo-link">
              <img
                className="logo"
                src="https://i.imgur.com/6RdvQ5P.png"
                alt="web-logo"
              />
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Surprise"> Surprise Me</Link>
          </li>
        </ul>
      </div>

      <div className="nav">
        <img
          className="avatar"
          src="https://i.pinimg.com/originals/56/96/3f/56963f19121e9db4fc34df65e4f26744.png"
          alt="header-avatar"
        />
      </div>
    </header>
  );
}

export default Header;
