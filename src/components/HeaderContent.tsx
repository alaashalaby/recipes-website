import { Button,Flex,Heading, Text } from "@chakra-ui/react";

const HeaderContent = () => {
  return (
    <Flex
      flexDirection="column"
      textAlign="center"
      gap={2}
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%,-50%)"
    >
      <Text color="#f89223">Do you like cooking?</Text>
      <Heading as="h1" color="#fff" fontSize={{base:"xl",md:"2xl",lg:"5xl"}}>The Thatix Recipe Community</Heading>
      <Button bg="#f89223" _hover={{opacity:"0.7"}} w="fit-content" margin="auto" color="#fff">Explore Our Recipes</Button>
    </Flex>
  );
};

export default HeaderContent;
