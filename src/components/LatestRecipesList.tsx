import { Box } from "@chakra-ui/react";
import LatestRecipeItem from "./LatestRecipeItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { getLatestRecipes } from "../RTK/features/latest-recipes/latestRecipesSlice";
import { Link } from "react-router-dom";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const LatestRecipesList = () => {
  const { meals } = useAppSelector((state) => state.latestRecipesReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getLatestRecipes());
  }, [dispatch]);
  return (
    <Box
      mx={8}
      mt={6}
      sx={{
        div: {
          cursor: "pointer",
        },
      }}
    >
      <Slider {...settings}>
        {meals &&
          meals.map((recipe) => (
            <Link to={`/details/${recipe.idMeal}`}>
              <Box p={2} key={recipe.idMeal}>
                <LatestRecipeItem recipe={recipe} />
              </Box>
            </Link>
          ))}
      </Slider>
    </Box>
  );
};

export default LatestRecipesList;
