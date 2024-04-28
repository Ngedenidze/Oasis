import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Navigation({ device, onSpecialsClick, onAboutClick }) {
  return (
    <menu className={`navbar-menu ${device}`}>
      
      <Link className="hover-effect" to="/">
        <h1>Home</h1>
      </Link>
      <a className="hover-effect" onClick={onAboutClick}>
        <h1>About</h1>
      </a>
      {device === "mobile" ? (
        ""
      ) : (
        <Link to="/">
          <img
            src={require("../assets/nav-logo.png")}
            alt="Little Lemon logo"
            className="nav-image"
          ></img>
          <section className="header-title">
            <h1>Oasis Diner</h1>
          </section>
        </Link>
      )}
      <a
        className="hover-effect"
        href={require("../assets/menu.webp")}
        target="_blank"
        rel="noreferrer"
      >
        <h1>Menu</h1>
      </a>
      <Link className="hover-effect" to="/reservations">
        <h1>Reservations</h1>
      </Link>
    </menu>
  );
}
