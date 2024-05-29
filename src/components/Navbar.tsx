import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Image,
  List,
  ListItem,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { BiBookmark, BiMenu, BiMoon, BiX } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import CustomDrawer from "./CustomDrawer";
import { useAppSelector } from "../app/hooks";
import SavedItem from "./SavedItem";
const Navbar = () => {
  const [isMediumScreen] = useMediaQuery("(min-width: 48em)");
  const isSmallScreen = !isMediumScreen;
  const [showMenu, setShowMenu] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const recipes = useAppSelector(
    (state) => state.savedRecipesReducer.savedRecipes
  );
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
    color: currentPath === path ? "#f89223" : "#101111",
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
      backgroundColor: "#f89233",
      transition: "all 0.4s ease",
    },
    ":hover": {
      color: "#f89233",
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
          <CustomDrawer
            title="Your Saved Recipes"
            isOpen={isOpen}
            onClose={onClose}
            placement="right"
            triggerButton={
              <Button
                onClick={onOpen}
                variant="none"
                fontSize="2xl"
                me={2}
                p={0}
                border="1px solid #f89233"
                color="#f89233"
                borderRadius="full"
                position="relative"
              >
                <BiBookmark />
                <Text
                  as="span"
                  width="20px"
                  height="20px"
                  borderRadius="50%"
                  bg="#f89223"
                  color="#fff"
                  position="absolute"
                  right="-5px"
                  top="-9px"
                  lineHeight="17px"
                  border="1px solid #f89233"
                  fontSize="md"
                  textAlign="center"
                >
                  {recipes.length}
                </Text>
              </Button>
            }
          >
            <Flex gap={4} flexDirection="column">
              {recipes.length === 0 ? (
                <Text
                  color="#f89233"
                  fontWeight="medium"
                  fontSize="lg"
                  textAlign="center"
                  pt={9}
                >
                  You Don't Have Any Saved Recipes Yet
                </Text>
              ) : (
                recipes &&
                recipes.map((recipe) => (
                  <SavedItem recipe={recipe} key={recipe.idMeal} />
                ))
              )}
            </Flex>
          </CustomDrawer>
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
