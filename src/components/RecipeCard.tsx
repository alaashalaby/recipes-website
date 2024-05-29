import { Box, Button, Heading, Image, useToast } from "@chakra-ui/react";
import { BiBookmark } from "react-icons/bi";
import { useAppDispatch } from "../app/hooks";
import { addRecipeToSaveList } from "../RTK/features/saved-recipes/savedRecipesSlice";
import { Link } from "react-router-dom";
const RecipeCard = ({ recipe }: { recipe: Meal }) => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const saveRecipe = (recipe: Meal) => {
    dispatch(addRecipeToSaveList(recipe));
    toast({
      title: "Recipe Saved Successfully",
      status: "success",
      position: "top",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Box borderRadius="xl" shadow="md" padding={4} bg="#fff3e5">
      <Box position="relative" overflow="hidden">
        <Image
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          borderRadius="lg"
          cursor="pointer"
          transition="transform 0.5s ease-in-out"
          _hover={{ transform: "scale(1.05)" }}
        />
        <Button
          onClick={() => saveRecipe(recipe)}
          variant="none"
          fontSize="2xl"
          bg="#fff"
          color="#f89233"
          position="absolute"
          top={2}
          right={1}
        >
          <BiBookmark />
        </Button>
      </Box>
      <Box textAlign="center" mt={3}>
        <Heading as="h3" fontSize="xl" fontWeight="medium" noOfLines={1} mb={2}>
          {recipe.strMeal}
        </Heading>
        <Link to={`/details/${recipe.idMeal}`} key={recipe.idMeal}>
          <Button
            bg="#f89223"
            w="fit-content"
            m="auto"
            transition="all 0.4s ease"
            _hover={{ opacity: "0.8" }}
            color="#fff"
          >
            Show Details
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
export default RecipeCard;
