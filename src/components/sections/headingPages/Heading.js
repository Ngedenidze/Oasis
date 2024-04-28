import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Oasis Diner</h1>
                    <h2>Butler</h2>
                    <p className="subsection">Visit us at Oasis Diner, your Butler, NJ spot for American dining with a global twist 
                    and specialty espresso drinks. Experience our inviting selection
                    and rich flavors in a place where local charm blends with international tastes.</p>
                    <br></br>
                    <a className="action-button" href="https://order.toasttab.com/online/oasis-diner-1277-new-jersey-23" target="_blank" rel="noopener noreferrer">Order Now</a>
                </section>

                <section className="hero-image">
                    <img src={require('../../../assets/food/food1.png')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
      </header>
    );
}