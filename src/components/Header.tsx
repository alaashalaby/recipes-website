import { Box, Container } from "@chakra-ui/react";
import headerImg from "../assets/header_img.jpg";
import HeaderContent from "./HeaderContent";
const Header = () => {
  return (
    <Container maxW="7xl" mt={4}>
      <Box
        as="header"
        height={{ base: "55vh", lg: "85vh" }}
        background={`linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${headerImg})`}
        bgPosition={"center"}
        bgRepeat="no-repeat"
        bgSize="cover"
        borderRadius="2xl"
        position="relative"
      >
        <HeaderContent />
      </Box>
    </Container>
  );
};

export default Header;
