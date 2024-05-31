import React, { useCallback, useEffect, useState } from "react";
import { useGetAllRecipesQuery } from "../RTK/services/recipes";
import Banner from "../components/Banner";
import bannerImg from "../assets/subheader.webp";
import { BiChevronRight, BiSearch } from "react-icons/bi";
import FoodBG from "../assets/pattern.jpg";
import {
  Box,
  Center,
  Container,
  List,
  ListItem,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  HStack,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import RecipeSkeleton from "../components/RecipeSkeleton";
import RecipeCard from "../components/RecipeCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import useTitle from "../utils/useTitle";
interface Props {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLDivElement>) => void;
}
const SearchBox = ({ searchTerm, setSearchTerm, handleSubmit }: Props) => {
  return (
    <Center as="form" w="min(420px,100%)" m="auto" onSubmit={handleSubmit}>
      <InputGroup>
        <InputRightElement
          as="button"
          type="submit"
          bg="primary.500"
          color="secondary.50"
          fontSize="xl"
          borderRadius="0 20px 20px 0"
        >
          <BiSearch />
        </InputRightElement>
        <Input
          type="text"
          placeholder="Search By Recipe Name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>
    </Center>
  );
};
const RecipesContainer = ({ searchTerm }: { searchTerm: string }) => {
  const { data, isLoading, isSuccess } = useGetAllRecipesQuery(searchTerm);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const length = data?.meals?.length as number;
  const totalPages = Math.ceil(length / itemsPerPage);
  const displayedRecipes = data?.meals?.slice(startIndex, endIndex);
  useEffect(() => {
    setCurrentPage(1)
  },[searchTerm])
  useEffect(() => {
    window.scrollTo({top:0,behavior:"smooth"})
  },[currentPage])
  return (
    <>
      <SimpleGrid columns={[1, 2, 3, 5]} spacing={4} my={6}>
        {isLoading || !isSuccess ? (
          Array.from({ length: 8 }).map((_, index) => (
            <RecipeSkeleton key={index} />
          ))
        ) : !displayedRecipes?.length ? (
          <Text textAlign="center" m="auto" fontSize="2xl">
            No Found Data!!
          </Text>
        ) : (
          displayedRecipes &&
          displayedRecipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.idMeal} />
          ))
        )}
      </SimpleGrid>
      <HStack mt={4} justify="center">
        <Button
          bg="secondary.200"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          isDisabled={currentPage === 1}
        >
          <FaArrowLeftLong />
        </Button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Button
            key={index}
            bg={currentPage === index + 1 ? "primary.500" : "secondary.100"}
            p="5px 10px"
            fontSize="xl"
            cursor="pointer"
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          bg="secondary.200"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          isDisabled={currentPage === totalPages}
        >
          <FaArrowRightLong />
        </Button>
      </HStack>
    </>
  );
};
const Recipes = () => {
  useTitle("Recipes");
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceSearch, setDebounceSearch] = useState("");
  function debounce<T extends (...args: never[]) => void>(
    fun: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fun(...args), delay);
    };
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((term: string) => {
      setDebounceSearch(term);
    }, 700),
    []
  );
  useEffect(() => {
    handleSearch(searchTerm);
  }, [handleSearch, searchTerm]);
  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDebounceSearch(searchTerm);
  };
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
            <Link to="/recipes">Recipes</Link>
          </ListItem>
        </List>
      </Banner>
      <Box py={9} bgImage={FoodBG}>
        <Container maxW="7xl">
          <SearchBox
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSubmit={handleSubmit}
          />
          <RecipesContainer searchTerm={debounceSearch} />
        </Container>
      </Box>
    </>
  );
};

export default Recipes;
