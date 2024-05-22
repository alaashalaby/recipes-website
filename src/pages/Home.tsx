import AboutUs from "../components/AboutUs";
import ChefList from "../components/ChefList";
import Header from "../components/Header";
import LatestRecipes from "../components/LatestRecipes";
import Recipes from "../components/Recipes";
const Home = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <LatestRecipes />
      <ChefList/>
      <Recipes />
    </>
  );
};

export default Home;
