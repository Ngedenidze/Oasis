import { Link } from "react-router-dom";
import React, { useState } from "react";
import Navigation from "../../Navigation";
import Hamburger from "../../../assets/hamburger.png";
import Close from "../../../assets/close.png";
import ScrollDownArrow from "./ScrollDownArrow";
import { useRef } from "react";

export default function Heading({ scrollToRef }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  const handleClick = () => {
    scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
  };
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
            <Navigation device="desktop" />
            {navbarOpen ? <Navigation device="mobile" /> : ""}
          </nav>
          <section className="header-title">
            <h1>Oasis Diner</h1>
            {/* <h2>Butler, NJ</h2> */}
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
        <button onClick={handleClick} className="arrow">
          <ScrollDownArrow />
        </button>
      </header>
    </>
  );
}
