import { Button, Center, Heading, Text } from "@chakra-ui/react";

const HeaderContent = () => {
  return (
    <Center flexDirection="column" textAlign="center" gap={2} zIndex={5}>
      <Text color="#f89223">Do you like cooking?</Text>
      <Heading
        as="h1"
        color="#fff"
        fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
      >
        Welcome to Recipe Community
      </Heading>
      <Button
        bg="#f89223"
        _hover={{ opacity: "0.7" }}
        w="fit-content"
        margin="8px auto"
        color="#fff"
      >
        Explore Our Recipes
      </Button>
    </Center>
  );
};

export default HeaderContent;
