import { Box } from "@chakra-ui/react";
import FoodBG from "../assets/pattern.jpg";
import SubTitle from "./SubTitle";
import LatestRecipesList from "./LatestRecipesList";
const LatestRecipes = () => {
  return (
    <Box
      mt={9}
      py={9}
      bgImage={FoodBG}
    >
      <SubTitle subTitle={"Recent Recipes"} title={"Latest Recipes"} />
      <LatestRecipesList />
    </Box>
  );
};

export default LatestRecipes;
