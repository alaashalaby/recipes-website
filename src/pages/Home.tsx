import AboutUs from "../components/AboutUs";
import CategoriesWrapper from "../components/CategoriesWrapper";
import ChefList from "../components/ChefList";
import Header from "../components/Header";
import LatestRecipes from "../components/LatestRecipes";
import Recipes from "../components/Recipes";
import useTitle from "../utils/useTitle";
const Home = () => {
  useTitle("Home")
  return (
    <>
      <Header />
      <AboutUs />
      <LatestRecipes />
      <ChefList/>
      <Recipes />
      <CategoriesWrapper/>
    </>
  );
};

export default Home;
