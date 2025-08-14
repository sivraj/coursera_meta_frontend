import React from "react";
import greekSaladImg from "../assets/greek salad.jpg";
import bruschettaImg from "../assets/bruchetta.svg";
import lemonDessertImg from "../assets/lemon dessert.jpg";
import Container from "./Container.react";
import { FaBicycle } from "react-icons/fa";

const specials = [
  {
    image: greekSaladImg,
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    image: bruschettaImg,
    title: "Bruschetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    image: lemonDessertImg,
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Menu = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-3 gap-8">
        {specials.map((special, index) => (
          <div
            key={index}
            className="bg-hightlightBg rounded-lg overflow-hidden shadow-lg"
          >
            <div className="w-full h-80 bg-gray-300 flex items-center justify-center">
              <img
                src={special.image}
                alt={special.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4 h-64">
              <div className="flex justify-between items-baseline mb-10 text-hightlight">
                <h3 className="font-bold text-[18pt]">{special.title}</h3>
                <p className="text-secondary">{special.price}</p>
              </div>
              <p className="text-gray-700">{special.description}</p>
            </div>
            <div className="flex items-bottom px-5 py-5">
              <a href="#" className="text-primary font-bold hover:underline">
                Order a delivery
              </a>
              <FaBicycle className="w-6 h-6 text-primary ml-2" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Menu;
