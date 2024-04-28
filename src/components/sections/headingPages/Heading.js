import React, { useState } from "react";
import Navigation from "../../Navigation";
import Hamburger from "../../../assets/hamburger.png";
import Close from "../../../assets/close.png";
import ScrollDownArrow from "./ScrollDownArrow";

export default function Heading({ scrollToSpecials, scrollToAbout }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <>
      <header>
        <section className="header-box">
          <nav>
            <nav className="burger">
              <img
                src={require("../../../assets/nav-logo.png")}
                alt="Oasis Diner logo"
                className="nav-image"
              ></img>

              <button className="burger-icon" onClick={handleToggle}>
                <img
                  src={navbarOpen ? Close : Hamburger}
                  alt="Navigation Bar"
                />
              </button>
            </nav>
            <Navigation device="desktop" onAboutClick={scrollToAbout} />
            {navbarOpen ? <Navigation device="mobile" onSpecialsClick={scrollToSpecials} onAboutClick={scrollToAbout}/> : ""}
          </nav>
          <section className="header-title">
            <h1>Oasis Diner</h1>
            <br></br>
            <br></br>
            <h3>From American Plates to Espresso Delights!</h3>
          </section>
          <article className="call-to-action">
            <section>
              <a
                className="action-button"
                href="https://order.toasttab.com/online/oasis-diner-1277-new-jersey-23"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </a>
            </section>
          </article>
        </section>
        <button onClick={() => scrollToSpecials.current?.scrollIntoView({ behavior: "smooth" })} className="arrow">
          <ScrollDownArrow />
        </button>
      </header>
    </>
  );
}
