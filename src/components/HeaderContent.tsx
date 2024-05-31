import { Button, Center, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HeaderContent = () => {
  return (
    <Center flexDirection="column" textAlign="center" gap={2} zIndex={5}>
      <Text color="primary.500" as="span">
        Do you like cooking?
      </Text>
      <Heading
        as="h1"
        color="secondary.50"
        fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
      >
        Welcome to Recipe Community
      </Heading>
      <Link to="/recipes">
        <Button _hover={{ opacity: "0.8" }} w="fit-content" margin="8px auto">
          Explore Our Recipes
        </Button>
      </Link>
    </Center>
  );
};

export default HeaderContent;
