import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <menu className={`navbar-menu ${props.device}`}>
      
      <Link className="hover-effect" to="/">
        <h1>Home</h1>
      </Link>
      <Link className="hover-effect" to="/">
        <h1>Login</h1>
      </Link>
      <a
        className="hover-effect"
        href="https://order.toasttab.com/online/oasis-diner-1277-new-jersey-23"
        target="_blank"
        rel="noopener noreferrer"
      > <h1>Order</h1> </a>

      {props.device === "mobile" ? (
        ""
      ) : (
        <Link to="/">
          <img
            src={require("../assets/nav-logo.png")}
            alt="Little Lemon logo"
            className="nav-image"
          ></img>
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

        <Link className="hover-effect" to="/about">
        <h1>About</h1>
      </Link>
     
    </menu>
  );
}
