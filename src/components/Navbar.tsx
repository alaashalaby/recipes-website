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
import { BiMenu, BiX } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import SavedRecipes from "./SavedRecipes";
const Navbar = () => {
  const [isMediumScreen] = useMediaQuery("(min-width: 48em)");
  const isSmallScreen = !isMediumScreen;
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const menuRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (showMenu) {
        setShowMenu(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    const handleClickOutside = (e:MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);
  useEffect(() => {
    setShowMenu(false);
  }, [location]);
  const getNavItem = (path: string) => ({
    color: currentPath === path ? "primary.500" : "secondary.900",
    fontWeight: "600",
    position: "relative",
    transition: "all 0.4s ease",
    "::after": {
      content: "''",
      position: "absolute",
      left: 0,
      bottom: "-5px",
      width: currentPath === path ? "100%" : "0",
      height: "2px",
      backgroundColor: "primary.500",
      transition: "all 0.4s ease",
    },
    ":hover": {
      color: "primary.500",
      "::after": {
        width: "100%",
      },
    },
  });
  return (
    <Box as="nav" position="sticky" top="0" zIndex="999" bg="#fff" shadow="sm">
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
          ref={menuRef}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: "4", md: "7" }}
          sx={{
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
          <ListItem sx={getNavItem("/")}>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem sx={getNavItem("/recipes")}>
            <Link to="/recipes">Recipes</Link>
          </ListItem>
          {/* <ListItem sx={getNavItem("/categories")}>
            <Link to="/categories">Categories</Link>
          </ListItem> */}
          <ListItem sx={getNavItem("/contact-us")}>
            <Link to="contact-us">Contact Us</Link>
          </ListItem>
        </List>
        <Box>
          {/* <IconButton
            aria-label="Toggle Theme"
            variant="none"
            fontSize="2xl"
            me={2}
            border="1px solid"
            borderColor="primary.500"
            color="primary.500"
            borderRadius="full"
            icon={<BiMoon />}
          /> */}
          <SavedRecipes/>
          {isSmallScreen && (
            <IconButton
              aria-label="menu icon"
              icon={showMenu ? <BiX /> : <BiMenu />}
              border="1px solid"
              borderColor="primary.500"
              color="primary.500"
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
