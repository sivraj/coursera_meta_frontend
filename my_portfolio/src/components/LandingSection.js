import React from "react";
import { Avatar, Container, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Sivaraj!";
const bio1 = "A Full Stack Engineer";
const bio2 = "specialised in Python, PHP and React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Container id="about-me-section">
      <VStack>
        <Avatar src="https://i.pravatar.cc/150?img=7"></Avatar>
        <Heading size="sm">{greeting}</Heading>
        <Heading size="xl">{bio1}</Heading>
        <Heading size="xl">{bio2}</Heading>
      </VStack>
    </Container>
  </FullScreenSection>
);

export default LandingSection;
