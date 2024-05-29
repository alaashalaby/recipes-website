import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import AboutImage from "../assets/about_img.jpg";
import AboutImageFood from "../assets/about_img_food.jpg";
import AboutImageSweet from "../assets/about_img_sweet.jpg";

const AboutUsImages = () => {
  return (
    <Flex
      gap={3}
      sx={{
        "div > img": {
          borderRadius: "8px",
          transition: "filter 0.3s ease-in-out",
        },
        "div > img:hover": {
          cursor: "pointer",
          filter: "brightness(0.4)",
        },
      }}
    >
      <Box flex={1}>
        <Image src={AboutImage} alt="about us image" w="100%" />
      </Box>
      <Flex
        flex={1}
        flexDirection="column"
        gap={3}
        display={{ base: "none", md: "flex" }}
      >
        <Box>
          <Image src={AboutImageFood} alt="about us food" />
        </Box>
        <Box>
          <Image src={AboutImageSweet} alt="about us sweet" />
        </Box>
      </Flex>
    </Flex>
  );
};
const AboutUsContent = () => {
  return (
    <Box mt={{ base: "1", lg: "3" }}>
      <Text color="#f89223" mb={2}>
        Recipes Introduction
      </Text>
      <Heading
        as="h3"
        fontWeight="bold"
        fontSize={{ base: "2xl", lg: "5xl" }}
        mb={{ base: "2", lg: "5" }}
        color="#2e2f31"
      >
        Give yourself a lifetime of cooking confidence
      </Heading>
      <Text
        color="#7d7f82"
        mb={{ base: "2", lg: "5" }}
        lineHeight={{ base: "normal", lg: "1.6" }}
      >
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour,
        words which don’t look even slightly believable.
      </Text>
      <Button
        bg="#f89223"
        transition="all 0.4s ease"
        _hover={{ opacity: "0.8" }}
        mt={{ base: "1", lg: "4" }}
        color="#fff"
      >
        Discover More
      </Button>
    </Box>
  );
};
const AboutUs = () => {
  return (
    <Container maxW="7xl" mt={{ base: 4, md: 4, lg: 7 }} pt={4}>
      <SimpleGrid gap={{ base: "4", lg: "9" }} columns={{ base: 1, md: 2 }}>
        <AboutUsImages />
        <AboutUsContent />
      </SimpleGrid>
    </Container>
  );
};

export default AboutUs;
