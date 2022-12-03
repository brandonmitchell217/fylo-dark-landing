import React from "react";
// import Logo from "../assets/logo.svg";
import Logo from "../assets/svg/Logo";
export const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/">
          <Logo />
        </a>
      </div>
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
