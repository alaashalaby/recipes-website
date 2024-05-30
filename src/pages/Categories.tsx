import Banner from "../components/Banner";
import bannerImg from "../assets/header_img2.jpg";
import { BiChevronRight, BiMenu } from "react-icons/bi";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import {
  useGetCategoriesQuery,
  useGetMealsByCategoryQuery,
} from "../RTK/services/recipes";
import FoodBG from "../assets/pattern.jpg";
import RecipeSkeleton from "../components/RecipeSkeleton";
import { useState } from "react";
import CustomDrawer from "../components/CustomDrawer";
const CategoriesContainer = () => {
  const { categoryName } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!categoryName) {
    throw new Error("Category name is required");
  }
  const [selectedCategory, setSelectedCategory] = useState("");
  const { data, isLoading, isSuccess } = useGetMealsByCategoryQuery(
    selectedCategory || categoryName
  );
  const { data: categories } = useGetCategoriesQuery();
  const handleCategoryClick = (name: string) => {
    setSelectedCategory(name);
  };

  const [isMediumScreen] = useMediaQuery("(min-width: 48em)");
  const isSmallScreen = !isMediumScreen;
  return (
    <>
      <Flex gap={{ base: 1, md: 4 }} flexWrap={{ base: "wrap", md: "nowrap" }}>
        {isSmallScreen ? (
          <CustomDrawer
            isOpen={isOpen}
            onClose={onClose}
            title="All Categories"
            triggerButton={
              <Button
                bg="#f89223"
                rounded="full"
                p={3}
                fontWeight="500"
                onClick={onOpen}
              >
                <BiMenu fontSize="1.2em" />
                <Text ms={2}>All Categories</Text>
              </Button>
            }
          >
            {categories?.categories?.map((category) => (
              <Link to={`/categories/${category.strCategory}`}>
                <ListItem
                  mb={2}
                  fontSize="lg"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  color={
                    categoryName === category.strCategory
                      ? "#f89223"
                      : "#101111"
                  }
                  onClick={() => handleCategoryClick(category.strCategory)}
                >
                  <Image
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                    boxSize={30}
                  />
                  {category.strCategory}
                </ListItem>
              </Link>
            ))}
          </CustomDrawer>
        ) : (
          <List
            borderRadius="lg"
            shadow="md"
            mt={4}
            p="20px 40px 20px 20px"
            bg="#fff3e5"
            h="fit-content"
          >
            {categories?.categories?.map((category) => (
              <Link to={`/categories/${category.strCategory}`}>
                <ListItem
                  mb={2}
                  fontSize="lg"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  color={
                    categoryName === category.strCategory
                      ? "#f89223"
                      : "#101111"
                  }
                  onClick={() => handleCategoryClick(category.strCategory)}
                >
                  <Image
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                    boxSize={30}
                  />
                  {category.strCategory}
                </ListItem>
              </Link>
            ))}
          </List>
        )}
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} my={6}>
          {isLoading || !isSuccess
            ? Array.from({ length: 8 }).map((_, index) => (
                <RecipeSkeleton key={index} />
              ))
            : data?.meals &&
              data?.meals?.map((recipe) => (
                <Link to={`/details/${recipe.idMeal}`}>
                  <CategoryItem recipe={recipe} key={recipe.idMeal} />
                </Link>
              ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};

const CategoryItem = ({ recipe }: { recipe: CategoryMeal }) => {
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
      </Box>
      <Box textAlign="center" mt={3}>
        <Heading as="h3" fontSize="xl" fontWeight="medium" noOfLines={1} mb={2}>
          {recipe.strMeal}
        </Heading>
      </Box>
    </Box>
  );
};

const Categories = () => {
  return (
    <>
      <Banner bannerImg={bannerImg}>
        <List
          zIndex={5}
          display="flex"
          alignItems="center"
          color="#fff"
          gap={1}
        >
          <ListItem fontSize="xl">
            <Link to="/">Home</Link>
          </ListItem>
          <BiChevronRight fontSize="1.4em" />
          <ListItem fontSize="xl">
            <Link to="/categories">Categories</Link>
          </ListItem>
        </List>
      </Banner>
      <Box py={9} bgImage={FoodBG}>
        <Container maxW="7xl">
          <CategoriesContainer />
        </Container>
      </Box>
    </>
  );
};
export default Categories;
