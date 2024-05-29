import { Box, Center, Text } from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";
const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Box>
      <Center
        bgImage={category.strCategoryThumb}
        w={{ base: "130px", md: "150px" }}
        h={{ base: "130px", md: "150px" }}
        borderRadius="50%"
        bgSize="cover"
        bgPosition="center"
        position="relative"
        transition="transform 0.4s ease-in-out"
        _before={{
          content: '""',
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          position: "absolute",
          top: 0,
          left: 0,
          bg: "rgba(0,0,0,0.6)",
          zIndex: "2",
        }}
        _hover={{ transform: "rotate(10deg)" }}
      >
        <Text
          zIndex={3}
          color="#fff"
          fontSize="xl"
          display="flex"
          alignItems="center"
          gap={1}
        >
          {category.strCategory}
          <BiLinkExternal />
        </Text>
      </Center>
    </Box>
  );
};

export default CategoryCard;
