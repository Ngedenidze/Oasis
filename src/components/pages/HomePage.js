import React, { useRef } from "react";
import Heading from "../sections/headingPages/Heading";
import Specials from "../sections/headingPages/Specials";
import Testimonials from "../sections/headingPages/Testimonials";
import About from "../sections/headingPages/About";

export default function Homepage() {
  const specialsRef = useRef(null);

  return (
    <>
      <Heading scrollToRef={specialsRef} />
      <main>
        <section ref={specialsRef}>
          <Specials />
        </section>
        <Testimonials />
        <About />
      </main>
    </>
  );
}
