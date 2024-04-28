import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
      <section className="testimonials">
        <article className="testimonials-topbar">
          <h1>Testimonials</h1>
        </article>

        <section className="testimonials-cards">
          <TestimonialCard
            link="https://maps.app.goo.gl/Q8dLY1YYCdHmQ98R7"
            name="Elias Creeley"
            description="The food was also really good but oh my god wait until you try the coffee!!
                 I got an iced espresso without sugar or milk and it was so good! I’ve had many of their other drinks and smoothies as well!
                 They just knock it out of the park with their food, their smoothies, their juices, and the coffee."
          />
          <TestimonialCard
            link="https://maps.app.goo.gl/6wsK9NUhxQR3Noeq9"
            name="Jane Aa"
            description="Really nice diner!!! I ordered the breakfast burger
                 and my boyfriend got the eggs Benedict both was really delicious.
                We also got the iced cappuccino and iced espresso, we loved it , 
                really good coffee. Definitely we will come back , this diner is modern than others"
          />
          <TestimonialCard
            link="https://maps.app.goo.gl/bRWHECmX7yPn9FAp7"
            name="Isabel Kaul"
            description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."
          />
          <TestimonialCard
            link="https://maps.app.goo.gl/ucXRRwrcJz7YVn8Z6"
            name="Jennifer Evans"
            description="This place was amazing! Not only was the service quick and friendly,
                 but everything was delicious! We got a latte and loved our first sip so much, we immediately ordered another for each of us!
                 They even had almond milk to accommodate my preference which most places don’t offer..."
          />
          <TestimonialCard
            link="https://maps.app.goo.gl/XDR9XEegcbuBHj1f6"
            name="Lad Bell"
            description="Excellent food and service.
            The chicken parmigiana over pasta was great.Marinara sauce had a great flavor.
            The side Caesar was plentiful with a nice dressing.
            All new interior that’s open and airy.  Nice menu with good choices.
            Prices are reasonable for the portions served.  Very clean."
          />
          <TestimonialCard
            link="https://maps.app.goo.gl/LJSCaJivWC4dm7XJA"
            name="Stephanie Aguilar"
            description="Excellent customer service, the place is well decorated,
            great ambience, loved the lamps, good lighting.
            The food is delicious and generous. Good hamburgers,
            they come with fries, pickles and Cole slaw. I liked the Tazo tea,
            the waiter brought honey for it, he was aware of our needs all the time. I'd come back! "
          />
          <TestimonialCard
            link="https://maps.app.goo.gl/KzR3HnMuV4XFDhAx9"
            name="Adam Niemuth"
            description="Excellent espresso. I’ve had the best in Brooklyn, it’s as good as Stumptown/ Hungry Ghost, etc.
            Really great food and good prices. Highly recommended. We are regulars and go at least twice each month."
          />
          <TestimonialCard
            link="https://maps.app.goo.gl/xEvmeHAGMZs7Hqda8"
            name="Gerry Elwood"
            description="We had a family meal there and we all had different meals.
            Everyone was happy with their food and service was excellent.
            Some of us hadn't been there for several years and despite the new name, 
            we had a great time and appreciated the service."
          />
        </section>

        <section className="testimonials-carousel">
          <Carousel />
        </section>
      </section>
    );
}