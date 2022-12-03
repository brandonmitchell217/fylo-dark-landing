import React from "react";
// import Logo from "../assets/logo.svg";
import Logo from "../assets/svg/Logo";

import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer>
      <div className="flex-col company">
        <div className="logo">
          <a href="/">
            <Logo />
          </a>
        </div>
        <div className="flex-col statement">
          <p className="iconCont">
            <span>
              <ImLocation />
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio
            consectetur repellendus reiciendis praesentium voluptate repudiandae
            adipisci estas
          </p>
        </div>
      </div>
      <div className="flex-col contact">
        <a href="/" className="iconCont">
          <span>
            <MdPhoneInTalk />
          </span>
          +1-543-123-4567
        </a>
        <a href="/" className="iconCont">
          <span>
            <MdEmail />
          </span>
          example@fylo.com
        </a>
      </div>
      <div className="flex-col footerNav">
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
      <div className="social">
        <a href="/">
          <FaFacebookF />
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
