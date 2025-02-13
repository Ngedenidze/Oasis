import { Link } from "react-router-dom";

export default function SpecialCard(props) {
  return (
    <article className="menu-card">
      <figure>
        <img className= "menu-card-image" src={props.image} alt={`${props.name} - ${props.description}`} />
        <figcaption>{props.name}</figcaption>
      </figure>
      <section className="menu-card-content">
        <h2>{props.name}</h2> {/* Changed to h2 assuming multiple h1 might be on the page */}
        <h3>{props.price}</h3>
        <p>{props.description}</p>
        <Link to={props.link} className="special-button" target="_blank" rel="noopener noreferrer">
        Order for Delivery
       </Link>
      </section>
      
    </article>
  );
}
