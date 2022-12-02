import React from "react";
import Img1 from "../assets/icon-access-anywhere.svg";
import Img2 from "../assets/icon-security.svg";
import Img3 from "../assets/icon-collaboration.svg";
import Img4 from "../assets/icon-any-file.svg";

export const Features = () => {
  const FeatureList = [
    {
      id: 1,
      image: Img1,
      header: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      id: 2,
      image: Img2,
      header: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      id: 3,
      image: Img3,
      header: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      id: 4,
      image: Img4,
      header: "Store any type of file",
      description:
        "Whether you're sharing holiday photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];

  return (
    <section id="features">
      <div className="featGrid">
        {FeatureList.map((feat) => (
          <div className="flex-col feat" key={feat.id}>
            <img src={feat.image} alt="Feature Icon" />
            <h2>{feat.header}</h2>
            <p>{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
