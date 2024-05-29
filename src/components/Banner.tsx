import { Center, Container } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  bannerImg: string;
  children: ReactNode;
}
const Banner = ({ bannerImg, children }: Props) => {
  return (
    <Container maxW="7xl" mt={4}>
      <Center
        as="header"
        height={{ base: "40vh", lg: "65vh" }}
        bgImage={bannerImg}
        bgPosition={"center"}
        bgRepeat="no-repeat"
        bgSize="cover"
        borderRadius="2xl"
        position="relative"
        _before={{
          content: '""',
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: "2",
          borderRadius: "2xl",
        }}
      >
        {children}
      </Center>
    </Container>
  );
};

export default Banner;
