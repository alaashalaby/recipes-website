import { Box } from "@chakra-ui/react";
import SubTitle from "./SubTitle";
import RecipesList from "./RecipesList";

const Recipes = () => {
  return (
    <Box mt={9}>
      <SubTitle subTitle={"Recent Recipes"} title={"Our Recipes"} />
      <RecipesList/>
    </Box>
  );
}

export default Recipes
