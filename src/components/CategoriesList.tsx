import { Box, SkeletonCircle } from "@chakra-ui/react";
import Slider from "react-slick";
import CategoryCard from "./CategoryCard";
import { useGetCategoriesQuery } from "../RTK/services/recipes";
import { Link } from "react-router-dom";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
const CategorySkeleton = () => {
  return (
    <Box padding="6" boxShadow="lg">
      <SkeletonCircle size={{ base: "130px", md: "150px" }} />
    </Box>
  );
};
const CategoriesList = () => {
  const { data, isLoading,isSuccess } = useGetCategoriesQuery();
  return (
    <Box
      mx={8}
      my={7}
      sx={{
        div: {
          cursor: "pointer",
        },
      }}
    >
      {isLoading || !isSuccess ? (
        <Slider {...settings}>
          {Array.from({ length: 7 }).map((_, index) => (
            <CategorySkeleton key={index} />
          ))}
        </Slider>
      ) : (
        data?.categories && (
          <Slider {...settings}>
            {data?.categories.map((category) => (
              <Link
                to={`/categories/${category.strCategory}`}
                key={category.idCategory}
              >
                <CategoryCard category={category} />
              </Link>
            ))}
          </Slider>
        )
      )}
    </Box>
  );
};

export default CategoriesList;
