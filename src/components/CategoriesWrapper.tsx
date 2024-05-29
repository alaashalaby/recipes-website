import SubTitle from "./SubTitle";
import { Box } from "@chakra-ui/react";
import CategoriesList from "./CategoriesList";
import FoodBG from "../assets/pattern.jpg";
const CategoriesWrapper = () => {
  return (
    <Box py={9} bgImage={FoodBG}>
      <SubTitle subTitle={"Recent Categories"} title={"Popular Categories"} />
      <CategoriesList />
    </Box>
  );
};

export default CategoriesWrapper;
