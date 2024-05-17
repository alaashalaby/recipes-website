import { Box, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import img from "../assets/blog.jpg";
import { BiX } from "react-icons/bi";
const SavedItem = () => {
  return (
    <Flex
      position="relative"
      shadow="lg"
      gap={3}
      p={2}
      align="center"
      borderRadius="lg"
      bg="#fde5ca"
    >
      <Image
        src={img}
        alt="recipe"
        width="60px"
        height="60px"
        borderRadius="lg"
      />
      <Box sx={{ "*": { color: "#101111" } }}>
        <Heading fontSize="lg" mb={1}>
          Cake
        </Heading>
        <Text lineHeight="normal">chiken - Egyptian</Text>
      </Box>
      <IconButton
        aria-label="remove icon"
        variant="none"
        fontSize="2xl"
        border="1px solid #f89233"
        color="#f89233"
        borderRadius="full"
        position="absolute"
        top=" -10px"
        right="-5px"
        h="initial"
        minW="unset"
        p={0}
        icon={<BiX />}
      />
    </Flex>
  );
};

export default SavedItem;
