import React from "react";
import Illustration from "../assets/illustration-stay-productive.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export const Cta = () => {
  return (
    <div>
      <img src={Illustration} alt="Illustration of productive collaboration" />
      <h2>Stay productive, wherever you are</h2>
      <p>
        Never let location be an issue when accessing your files. Fylo has you
        covered for all your file storage needs.
      </p>
      <p>
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </p>
      <a href="/">
        See how Fylo works
        <span>
          <BsFillArrowRightCircleFill />
        </span>
      </a>
    </div>
  );
};
