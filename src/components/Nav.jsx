import React from "react";
import Logo from "../assets/logo.svg";
export const Nav = () => {
  return (
    <nav>
      <a href="/">
        <img src={Logo} alt="Fylo Logo" />
      </a>
      <ul>
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Team</a>
        </li>
        <li>
          <a href="/">Sign In</a>
        </li>
      </ul>
    </nav>
  );
};
