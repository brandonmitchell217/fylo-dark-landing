import React from "react";
import Logo from "../assets/logo.svg";

import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer>
      <div>
        <a href="/">
          <img src={Logo} alt="Fylo Logo" />
        </a>
        <p>
          <span>
            <ImLocation />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio
          consectetur repellendus reiciendis praesentium voluptate repudiandae
          adipisci estas
        </p>
      </div>
      <div>
        <a href="/">
          <span>
            <MdPhoneInTalk />
          </span>
          +1-543-123-4567
        </a>
        <a href="/">
          <span>
            <MdEmail />
          </span>
          example@fylo.com
        </a>
      </div>
      <div>
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Jobs</a>
          </li>
          <li>
            <a href="/">Press</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Terms</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
        </ul>
      </div>
      <div>
        <a href="/">
          <BsFacebook />
        </a>
        <a href="/">
          <BsTwitter />
        </a>
        <a href="/">
          <BsInstagram />
        </a>
      </div>
    </footer>
  );
};
