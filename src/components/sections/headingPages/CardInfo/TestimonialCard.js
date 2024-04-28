import Star from "../../../../assets/star.png";
export default function TestimonialCard(props) {
  return (
    <article className="testimonial-card">
  <div className="ratings">
    <img src={Star} alt="Star Icon" />
    <span>5/5</span>
  </div>
  <h3>{props.name}</h3>
  <div className="description">
    <p>{props.description}</p>
  </div>
  <a href={props.link} target="_blank" rel="noopener noreferrer">
    View
  </a>
    </article>
  );
}
