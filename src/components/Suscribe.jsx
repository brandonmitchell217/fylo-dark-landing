import React from "react";

export const Suscribe = () => {
  return (
    <section id="suscribe">
      <div className="wrapper">
        <div className="flex-col">
          <h2>Get early access today</h2>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input name="email" type="text" placeholder="email@example.com" />
            <button type="submit" className="blueBtn">
              Get Started For Free
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
