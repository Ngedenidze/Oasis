import React, { useRef } from "react";
import Heading from "../sections/headingPages/Heading";
import Specials from "../sections/headingPages/Specials";
import Testimonials from "../sections/headingPages/Testimonials";
import About from "../sections/headingPages/About";

export default function Homepage() {
  const specialsRef = useRef(null);
  const aboutRef = useRef(null);
  const handleAboutClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Heading scrollToSpecials={specialsRef} scrollToAbout={handleAboutClick} />
      <main>
        <section ref={specialsRef}>
          <Specials />
        </section>
        <Testimonials />
        <section ref={aboutRef}>
          <About />
        </section>
      </main>
    </>
  );
}