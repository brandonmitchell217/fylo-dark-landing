import React from "react";
import Img1 from "../assets/profile-1.jpg";
import Img2 from "../assets/profile-2.jpg";
import Img3 from "../assets/profile-3.jpg";

export const Testimonials = () => {
  const TestimonialList = [
    {
      id: 1,
      testimonial:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      person: {
        image: Img1,
        name: "Satish Patel",
        info: "Founder & CEO, Huddle",
      },
    },
    {
      id: 2,
      testimonial:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      person: {
        image: Img2,
        name: "Bruce McKenzie",
        info: "Founder & CEO, Huddle",
      },
    },
    {
      id: 3,
      testimonial:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      person: {
        image: Img3,
        name: "Iva Boyd",
        info: "Founder & CEO, Huddle",
      },
    },
  ];

  return (
    <section id="testimonials">
      <div className="flex-col">
        {TestimonialList.map((test) => (
          <div className="testimonial" key={test.id}>
            <p>{test.testimonial}</p>
            <div className="author">
              <div className="image">
                <img src={test.person.image} alt="Author of testimonial" />
              </div>
              <div className="info">
                <h3>{test.person.name}</h3>
                <p>{test.person.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
