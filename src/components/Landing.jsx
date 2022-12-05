import React from "react";
import Illustration from "../assets/illustration-intro.png";
import BgCurvyDesktop from "../assets/svg/Bg-curvy-desktop";
import BgCurvyMobile from "../assets/svg/Bg-curvy-mobile";
import useSizing from "../hooks/useSizing";
import Lottie from "lottie-react";
import illustrationAnimation from "../assets/mainComp.json";
export const Landing = () => {
  const isMobile = useSizing() <= 768 ? true : false;
  return (
    <section id="landing">
      <div className="wrapper">
        <div className="flex-col">
          {/* <img src={Illustration} alt="Illustration of an office" /> */}
          <Lottie
            animationData={illustrationAnimation}
            loop={true}
            style={{ height: "550px" }}
          />
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family and co-workers.
          </p>
          <a href="/" className="blueBtn" onClick={(e) => e.preventDefault()}>
            Get Started
          </a>
        </div>
      </div>
      <div className="shapeBG">
        {isMobile ? <BgCurvyMobile /> : <BgCurvyDesktop />}
      </div>
    </section>
  );
};
