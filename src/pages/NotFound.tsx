import { Box, Center, HStack, Image, Text } from "@chakra-ui/react";
import img from "../assets/pastaImg.png";
import patternImg from "../assets/pattern.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import useTitle from "../utils/useTitle";
const NotFound = () => {
  useTitle("404");
  return (
    <Center h="100vh" bgImage={patternImg} flexDirection="column" px="4">
      <HStack spacing={0}>
        <Text fontSize="9xl" color="secondary.900">
          4
        </Text>
        <Image src={img} w={280} objectFit="contain" />
        <Text fontSize="9xl" color="secondary.900">
          4
        </Text>
      </HStack>
      <Box textAlign="center">
        <Text color="secondary.900" fontWeight="bold">
          This page you are looking for is missing but here's pasta for you.{" "}
        </Text>
        <Link to="/">
          <Center color="primary.500" fontWeight="bold" mt={4} gap={3}>
            Take it and Go Back <BsArrowRight />
          </Center>
        </Link>
      </Box>
    </Center>
  );
};

export default NotFound;
