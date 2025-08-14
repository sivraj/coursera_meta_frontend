import React from "react";

import heroImage from "../assets/restauranfood.jpg"; // Ensure the image is imported correctly
import Container from "./Container.react";

const Landing = () => {
  return (
    <Container backgroundColor="bg-primary">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-yellow font-markazi">
            Little Lemon
          </h1>
          <h2 className="text-3xl">Chicago</h2>
          <p className="text-lg pb-20">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <a
            href="/reservations"
            type="button"
            className="bg-yellow text-black font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Reserve a Table
          </a>
        </div>
        <div className="h-[30rem] flex rounded-lg">
          <img
            src={heroImage}
            alt="restaurant food"
            className="rounded"
            rounded-lg
          />
        </div>
      </div>
    </Container>
  );
};

export default Landing;
