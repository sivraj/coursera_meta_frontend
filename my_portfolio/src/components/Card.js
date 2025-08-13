import { Heading, HStack, Image, Text, VStack, Box, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack spacing={4} align="stretch">
      <Box
        bg="white"
        borderRadius="10px"
        boxShadow="md"
        overflow="hidden"
        maxW="sm"
      >
        <Image src={imageSrc} w="100%" objectFit="cover" borderTopRadius="10px" />

        <VStack align="start" spacing={3} p={4}>
          <Heading size="sm" color="black">{title}</Heading>
          <Text color="gray.500" fontSize="sm" noOfLines="2">{description}</Text>
          <Button
            variant="link"
            size="sm"
            color="black"
            rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
          >
            See More
          </Button>
        </VStack>
      </Box>
    </HStack>
  );
};

export default Card;