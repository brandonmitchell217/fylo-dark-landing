import React from "react";
import Img1 from "../assets/profile-1.jpg";
import Img2 from "../assets/profile-2.jpg";
import Img3 from "../assets/profile-3.jpg";

export const Testimonials = () => {
  const TestimonialList = [
    {
      id: 1,
      testimonial:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled machine.",
      person: {
        image: Img1,
        name: "Satish Patel",
        info: "Founder & CEO, Huddle",
      },
    },
    {
      id: 2,
      testimonial:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled machine.",
      person: {
        image: Img2,
        name: "Bruce McKenzie",
        info: "Founder & CEO, Huddle",
      },
    },
    {
      id: 3,
      testimonial:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled machine.",
      person: {
        image: Img3,
        name: "Iva Boyd",
        info: "Founder & CEO, Huddle",
      },
    },
  ];

  return (
    <div>
      {TestimonialList.map((test) => (
        <div key={test.id}>
          <p>{test.testimonial}</p>
          <div>
            <img src={test.person.image} alt="Author of testimonial" />
            <h3>{test.person.name}</h3>
            <p>{test.person.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
