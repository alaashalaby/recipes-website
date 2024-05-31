import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { BiPurchaseTag, BiStar } from "react-icons/bi";

const LatestRecipeItem = ({ recipe }: { recipe: Meal }) => {
  return (
    <Box borderRadius="lg" bg="#fff" transition="all 0.5s ease-in-out">
      <Image
        src={recipe.strMealThumb}
        borderRadius="8px 8px 0 0"
        alt={recipe.strMeal}
      />
      <Box p={4}>
        <Heading as="h3" fontSize="xl" mb={2}>
          {recipe.strMeal}
        </Heading>
        <Text noOfLines={2} mb={3} color="secondary.700" fontSize="md">
          {recipe.strInstructions}
        </Text>
        <Divider />
        <Flex alignItems="center" justify="space-between" mt={2}>
          <Button
            variant="none"
            color="primary.500"
            transition="all 0.5s ease-in-out"
          >
            <BiPurchaseTag />
            <Text as="span" ms="1">
              {recipe.strTags || "No Tags"}
            </Text>
          </Button>
          <Flex>
            <BiStar />
            <BiStar />
            <BiStar />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default LatestRecipeItem;
