import React from "react";
import { Cta } from "../components/Cta";
import { Features } from "../components/Features";
import { Landing } from "../components/Landing";
import { Testimonials } from "../components/Testimonials";
import { Subscribe } from "../components/Subscribe";

function App() {
  return (
    <div className="App">
      <Landing />
      <Features />
      <Cta />
      <Testimonials />
      <Subscribe />
    </div>
  );
}

export default App;
