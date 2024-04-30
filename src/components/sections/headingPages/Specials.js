import Carousel from "./SpecialsCarousel";
import GreekSalad from "../../../assets/food/greek-salad.webp";
import LemonDessert from "../../../assets/food/lemon-dessert.webp";
import CroqueMadame from "../../../assets/food/croque-madame.jpg";
import SpecialCard from "./CardInfo/SpecialCard";
import AvocadoToast from "../../../assets/food/avocado-toast.jpg";
import RedWhiteBlue from "../../../assets/food/red-white-blue.jpg";
import SweetFrench from "../../../assets/food/sweet-french.webp";
import BreakfastCroissant from "../../../assets/food/breakfast-croissant.jpg";
import BreakfastBurrito from "../../../assets/food/breakfast-burrito.jpg";

export default function Specials() {
  return (
    <section className="specials">
      <article className="specials-topbar">
        <div>
          <h1>MENU SPECIALS</h1>
        </div>
      </article>

      <section className="specials-cards">
        <SpecialCard
          link="https://order.toasttab.com/online/oasis-diner-1277-new-jersey-23/item-red-white-blue_95b56a66-258f-4c96-9f4e-8b7926a158ee"
          image={RedWhiteBlue}
          name="Red, White & Blue"
          price="$14.95"
          description="Belgian waffle topped with strawberries, blueberries & bananas.
                Served with organic grade A maple syrup."
        />
        <SpecialCard
          image={AvocadoToast}
          name="Avocado Toast"
          price="$16.99"
          description="Seven grain bread, scramble eggs,
                smashed avocados & grilled cherry tomatoes. Served with lemon & sea salt arugula salad."
        />
        <SpecialCard
          image={CroqueMadame}
          name="Croque Madame"
          price="$18.95"
          description="Bechamel sauce, black forest ham, 
                cheddar cheese between two layers of puff pastry and topped with one sunny side up egg. Served with seasonal fruit."
        />
        <SpecialCard
          image={SweetFrench}
          name="Sweet French"
          price="$10.95"
          description="Two croissants stuffed with nutella, strawberries & bananas."
        />
        <SpecialCard
          image={BreakfastCroissant}
          name="Breakfast Croissant"
          price="$13.95"
          description="Freshly baked croissant stuffed with scramble eggs,
                black forest ham & cheddar cheese. Served with seasonal fruit."
        />
        <SpecialCard
          image={BreakfastBurrito}
          name="Breakfast Burrito"
          price="$12.95"
          description="Sausage, scramble eggs, jalapeno peppers, onions, cheddar cheese, flour tortilla.
                 Served with home fries, salsa & sour cream."
        />
      </section>

      <section className="specials-carousel">
        <Carousel />
      </section>
    </section>
  );
}
