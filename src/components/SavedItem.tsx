import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BiX } from "react-icons/bi";
import { useAppDispatch } from "../app/hooks";
import { removeRecipeFromSaveList } from "../RTK/features/saved-recipes/savedRecipesSlice";
const SavedItem = ({ recipe }: { recipe: Meal }) => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const handleRemoveRecipe = (id: string) => {
    dispatch(removeRecipeFromSaveList(id));
    toast({
      title: "Recipe Removed Successfully",
      status: "success",
      position: "top-left",
      duration: 3500,
      isClosable: true,
    });
  };
  return (
    <Flex
      position="relative"
      shadow="lg"
      gap={3}
      p={2}
      align="center"
      borderRadius="lg"
      bg="primary.50"
    >
      <Image
        src={recipe?.strMealThumb}
        alt="recipe"
        width="60px"
        height="60px"
        borderRadius="lg"
      />
      <Box sx={{ "*": { color: "secondary.700" } }}>
        <Heading fontSize="lg" mb={1}>
          {recipe?.strMeal}
        </Heading>
        <Text lineHeight="normal">
          {recipe?.strCategory} - {recipe?.strArea}
        </Text>
      </Box>
      <IconButton
        aria-label="remove icon"
        variant="none"
        fontSize="2xl"
        border="1px solid"
        borderColor="primary.50"
        color="primary.500"
        borderRadius="full"
        position="absolute"
        top=" -10px"
        right="-5px"
        h="initial"
        minW="unset"
        p={0}
        onClick={() => handleRemoveRecipe(recipe.idMeal)}
        icon={<BiX />}
      />
    </Flex>
  );
};
export default SavedItem;
