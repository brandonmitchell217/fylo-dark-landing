import React from "react";
import Illustration from "../assets/illustration-intro.png";

export const Landing = () => {
  return (
    <section id="landing">
      <div className="flex-col">
        <img src={Illustration} alt="Illustration of an office" />
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family and co-workers.
        </p>
        <a href="/" className="blueBtn">
          Get Started
        </a>
      </div>
    </section>
  );
};
