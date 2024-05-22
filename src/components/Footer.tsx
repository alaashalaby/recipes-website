import {
  Box,
  Container,
  Link,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Text,
  Flex,
} from "@chakra-ui/react";
import FooterBG from "../assets/pattern.jpg";
import logo from "../assets/logo.png";
import { Link as RouterLink } from "react-router-dom";
import { BiMailSend, BiMap, BiPhone } from "react-icons/bi";
const Footer = () => {
  return (
    <Box as="footer" bgImage={FooterBG} filter="invert(1)" py={9}>
      <Container maxW="7xl">
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          <Box>
            <RouterLink to="/">
              <Image src={logo} alt="recipe-logo" filter="invert(1)" />
            </RouterLink>
            <Text mt={3}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id rerum
              explicabo aspernatur necessitatibus dolorem eum modi magni
              quibusdam quos aut?
            </Text>
          </Box>
          <Flex flexDir="column" align={{base:"flex-start",lg:"center"}}>
            <Heading fontSize="xl" mb={5}>
              Explore
            </Heading>
            <List
              sx={{
                ">li": {
                  color: "#101111",
                  fontWeight: "600",
                  transition: "all 0.4s ease",
                  mb: "3",
                  ":hover": {
                    color: "#f89233",
                  },
                },
              }}
            >
              <ListItem>
                <RouterLink to="/">Home</RouterLink>
              </ListItem>
              <ListItem>
                <RouterLink to="/recipes">Recipes</RouterLink>
              </ListItem>
              <ListItem>
                <RouterLink to="/categories">Categories</RouterLink>
              </ListItem>
              <ListItem>
                <RouterLink to="contact-us">Contact Us</RouterLink>
              </ListItem>
            </List>
          </Flex>
          <Box>
            <Heading fontSize="xl" mb={8}>
              Contact Us
            </Heading>
            <List
              sx={{
                "li a": {
                  display: "flex",
                  alignItems: "center",
                  gap: "2",
                  ":hover": {
                    textDecoration: "none",
                  },
                },
              }}
            >
              <ListItem mb={4}>
                <Link href="#">
                  <BiMap color="#f89223" filter="invert(1)" /> 787 Mark View
                  Street, New Town, California
                </Link>
              </ListItem>
              <ListItem mb={4}>
                <Link href="mailto:needhelp@thatix.com">
                  <BiMailSend color="#f89223" filter="invert(1)" />
                  needhelp@thatix.com
                </Link>
              </ListItem>
              <ListItem mb={4}>
                <Link href="tel:5550007878">
                  <BiPhone color="#f89223" filter="invert(1)" /> 555 000 7878
                </Link>
              </ListItem>
            </List>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
