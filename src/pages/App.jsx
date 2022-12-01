import React from "react";
import { Cta } from "../components/Cta";
import { Features } from "../components/Features";

import { Landing } from "../components/Landing";
import { Testimonials } from "../components/Testimonials";
import { Suscribe } from "../components/Suscribe";

function App() {
  return (
    <div className="App">
      <Landing />
      <Features />
      <Cta />
      <Testimonials />
      <Suscribe />
    </div>
  );
}

export default App;
