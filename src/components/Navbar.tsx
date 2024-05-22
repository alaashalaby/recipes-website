import {
  Box,
  Container,
  IconButton,
  Image,
  List,
  ListItem,
  useMediaQuery,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { BiMenu, BiMoon, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import SavedRecipes from "./SavedRecipes";
import { useState } from "react";
const Navbar = () => {
  const [isMediumScreen] = useMediaQuery("(min-width: 48em)");
  const isSmallScreen = !isMediumScreen;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Box as="nav" position="sticky" top="0" zIndex="999" bg="#fff" shadow="sm" >
      <Container
        maxW="7xl"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        position="relative"
      >
        <Link to="/">
          <Image src={logo} alt="recipe-logo" />
        </Link>
        <List
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: "4", md: "7" }}
          sx={{
            ">li": {
              color: "#101111",
              fontWeight: "600",
              transition: "all 0.4s ease",
              position: "relative",
              "::after": {
                content: "''",
                position: "absolute",
                left: 0,
                bottom: "-5px",
                width: "0",
                height: "2px",
                backgroundColor: "#f89233",
                transition: "all 0.4s ease",
              },
              ":hover": {
                color: "#f89233",
                "::after": {
                  width: "100%",
                },
              },
            },
            "li:first-of-type": {
              color: "#f89233",
              "::after": {
                width: "100%",
              },
            },
            position: isSmallScreen ? "absolute" : "",
            top: isSmallScreen && "70px",
            w: isSmallScreen && "calc(100% - 32px)",
            py: isSmallScreen && "5",
            shadow: isSmallScreen && "md",
            bg: isSmallScreen && "#fff",
            zIndex: 3,
          }}
          opacity={isMediumScreen || showMenu ? "1" : "0"}
          transform={
            isMediumScreen || showMenu ? "translateY(0)" : "translateY(-10px)"
          }
          transition="opacity 0.3s ease-in-out, transform 0.3s ease-in-out"
        >
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/recipes">Recipes</Link>
          </ListItem>
          <ListItem>
            <Link to="/categories">Categories</Link>
          </ListItem>
          <ListItem>
            <Link to="contact-us">Contact Us</Link>
          </ListItem>
        </List>
        <Box>
          <IconButton
            aria-label="Toggle Theme"
            variant="none"
            fontSize="2xl"
            me={2}
            border="1px solid #f89233"
            color="#f89233"
            borderRadius="full"
            icon={<BiMoon />}
          />
          <SavedRecipes />
          {isSmallScreen && (
            <IconButton
              aria-label="menu icon"
              icon={showMenu ? <BiX /> : <BiMenu />}
              border="1px solid #f89233"
              color="#f89233"
              variant="none"
              fontSize="2xl"
              borderRadius="full"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
