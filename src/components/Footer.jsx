import React from "react";
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
        <a href="/" className="iconCont" onClick={(e) => e.preventDefault()}>
          <span>
            <MdPhoneInTalk />
          </span>
          +1-543-123-4567
        </a>
        <a href="/" className="iconCont" onClick={(e) => e.preventDefault()}>
          <span>
            <MdEmail />
          </span>
          example@fylo.com
        </a>
      </div>
      <div className="flex-col footerNav">
        <ul>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              About Us
            </a>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              Jobs
            </a>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              Press
            </a>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              Blog
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              Contact Us
            </a>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              Terms
            </a>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              Privacy
            </a>
          </li>
        </ul>
      </div>
      <div className="social">
        <a href="/" onClick={(e) => e.preventDefault()}>
          <FaFacebookF />
        </a>
        <a href="/" onClick={(e) => e.preventDefault()}>
          <BsTwitter />
        </a>
        <a href="/" onClick={(e) => e.preventDefault()}>
          <BsInstagram />
        </a>
      </div>
    </footer>
  );
};
