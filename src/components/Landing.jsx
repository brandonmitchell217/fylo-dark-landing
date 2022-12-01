import React from "react";
import Illustration from "../assets/illustration-intro.png";

export const Landing = () => {
  return (
    <div>
      <img src={Illustration} alt="Illustration of an office" />
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam
        perferendis expedita dignissimos iste, architecto sit velit natus
        doloremque harum labore culpa explicabo quaerat.
      </p>
      <a href="/">Get Started</a>
    </div>
  );
};
