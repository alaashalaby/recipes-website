import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { BiBookmark } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addRecipeToSaveList,
  removeRecipeFromSaveList,
} from "../RTK/features/saved-recipes/savedRecipesSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import useCustomToast from "../utils/useCustomToast";
const RecipeCard = ({ recipe }: { recipe: Meal }) => {
  const dispatch = useAppDispatch();
  const { showCustomToast } = useCustomToast();
  const savedRecipes = useAppSelector(
    (state) => state.savedRecipesReducer.savedRecipes
  );
  const [isRecipeSaved, setIsRecipeSaved] = useState(false);
  useEffect(() => {
    const exist = savedRecipes?.find(
      (saveRecipe) => saveRecipe.idMeal === recipe.idMeal
    );
    setIsRecipeSaved(!!exist);
  }, [savedRecipes, recipe.idMeal]);
  const handleSaveRecipe = () => {
    if (isRecipeSaved) {
      dispatch(removeRecipeFromSaveList(recipe.idMeal));
      showCustomToast({
        title: "Recipe Removed Successfully",
        status: "success",
        position: "top-left",
      });
    } else {
      dispatch(addRecipeToSaveList(recipe));
      showCustomToast({
        title: "Recipe Saved Successfully",
        status: "success",
        position: "top",
      });
    }
    setIsRecipeSaved(!isRecipeSaved);
  };
  return (
    <Box borderRadius="xl" shadow="md" padding={4} bg="primary.50">
      <Box position="relative" overflow="hidden" borderRadius="lg">
        <Image
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          borderRadius="lg"
          cursor="pointer"
          transition="transform 0.5s ease-in-out"
          _hover={{ transform: "scale(1.05)" }}
        />
        <Button
          onClick={handleSaveRecipe}
          p={0}
          variant="none"
          fontSize="2xl"
          bg="#fff"
          color="primary.500"
          position="absolute"
          top={2}
          right={1}
        >
          {isRecipeSaved ? <BsBookmarkFill /> : <BiBookmark />}
        </Button>
      </Box>
      <Box textAlign="center" mt={3}>
        <Heading
          as="h3"
          fontSize="xl"
          noOfLines={1}
          mb={2}
          color="secondary.800"
        >
          {recipe.strMeal}
        </Heading>
        <Link to={`/details/${recipe.idMeal}`} key={recipe.idMeal}>
          <Button
            w="fit-content"
            m="auto"
            transition="all 0.4s ease"
            _hover={{ opacity: "0.8" }}
          >
            Show Details
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
export default RecipeCard;
