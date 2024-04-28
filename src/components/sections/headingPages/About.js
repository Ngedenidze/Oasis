export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Oasis Diner</h1>
                <h2>Butler, NJ</h2>
                <p className="about-subtext">Experience a blend of global flavors at our family-centric American diner.
                 Oasis Diner combines the charm of local dining with a diverse menu that features specialties from around the world.
                Alongside our heartwarming selections, enjoy our rich, espresso-based coffees in a cozy and inviting atmosphere.
                 Join us at Oasis Diner and savor the taste of culinary diversity.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}