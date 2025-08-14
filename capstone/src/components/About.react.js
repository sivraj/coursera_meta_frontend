import React from "react";
import Story from "./Story.react";
import Testimonials from "./Testimonials.react";
import Container from "./Container.react";

const About = () => {
  return (
    <Container>
      <Story />
      <Testimonials />
    </Container>
  );
};

export default About;
