import { useGetAllRecipesQuery } from "../RTK/services/recipes";
import { Button, Container, SimpleGrid } from "@chakra-ui/react";
import RecipeSkeleton from "./RecipeSkeleton";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";
const RecipesList = () => {
  const { data, isLoading, isSuccess } = useGetAllRecipesQuery("");
  return (
    <Container maxW="7xl" mt={4} py={7}>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
        {isLoading || !isSuccess
          ? Array.from({ length: 8 }).map((_, index) => (
              <RecipeSkeleton key={index} />
            ))
          : data?.meals &&
            data?.meals
              .slice(0, 8)
              .map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.idMeal} />
              ))}
      </SimpleGrid>
      <Link to="/recipes" style={{ display: "flex" }}>
        <Button
          w="fit-content"
          m="1.1em auto 0"
          transition="all 0.4s ease"
          _hover={{ opacity: "0.8" }}
        >
          Show More
        </Button>
      </Link>
    </Container>
  );
};

export default RecipesList;
