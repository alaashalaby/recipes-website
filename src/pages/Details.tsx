import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  SkeletonText
} from "@chakra-ui/react";
import FoodBG from "../assets/pattern.jpg";
import bannerImg from "../assets/subheader.webp";
import { useParams,Link as RouterLink } from "react-router-dom";
import { BiHome, BiLinkExternal, BiMenu, BiPurchaseTag, BiWorld } from "react-icons/bi";
import { useGetRecipeByIdQuery } from "../RTK/services/recipes";
import Banner from "../components/Banner";
import DetailsSkeleton from "../components/DetailsSkeleton";
import useTitle from "../utils/useTitle";
const parseInstructions = (instructions: string): string[] => {
  return instructions.split('.').filter(instruction=>instruction.trim() !== "").map(instruction=>instruction.replace(/^[^a-zA-Z]+/,''))
}
const DetailsContent = ({ recipeDetails }: { recipeDetails: Meal }) => {
  const instructions = parseInstructions(recipeDetails?.strInstructions)
  console.log(instructions)
  return (
    <Flex flexDirection="column" gap={3} flex="1" ps={{base:5,md:5,lg:8}}>
      <Flex align="center" justifyContent="space-between" mb={1}>
        <Heading as="h1" color="secondary.800" fontSize="3xl">
          {recipeDetails?.strMeal}
        </Heading>
        <Button _hover={{ opacity: "0.9" }}>
          <Link as={RouterLink} to="/">
            <BiHome fontSize="1.5em" />
          </Link>
        </Button>
      </Flex>
      <List listStyleType="initial">
        {instructions && instructions.map((instruction, index) => <ListItem key={index} mb="1" color="secondary.800" fontWeight="600">{ instruction}</ListItem>)}
      </List>
      <List
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        gap={3}
        mt={3}
        sx={{
          li: {
            color: "secondary.800",
            border: "1px solid",
            borderColor: "primary.500",
            p: "2",
            borderRadius: "md",
            letterSpacing: "2px",
            fontWeight: "medium",
            display: "flex",
            alignItems: "center",
            gap: "2",
            cursor: "pointer",
          },
        }}
      >
        {recipeDetails?.strTags && (
          <ListItem>
            <BiPurchaseTag />
            {recipeDetails?.strTags}
          </ListItem>
        )}
        <ListItem>
          <BiWorld />
          {recipeDetails?.strArea}
        </ListItem>
        <ListItem>
          <BiMenu />
          {recipeDetails?.strCategory}
        </ListItem>
        <ListItem>
          <Link
            href={recipeDetails?.strYoutube}
            isExternal
            letterSpacing="2px"
            display="flex"
            alignItems="center"
            gap={2}
            _hover={{ textDecoration: "none" }}
          >
            YouTube <BiLinkExternal fontSize="1.3em" />
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
};
const SubHeader = ({ title }: { title: string }) => {
  return (
    <Flex align="center" gap={3}>
      <Heading as="h5" color="secondary.800" fontSize="xl">
        {title}
      </Heading>
      <Divider borderColor="secondary.800" lineHeight="0" mt={1} />
    </Flex>
  );
};
const Details = () => {
  useTitle("Details");
  const { id } = useParams();
  if (!id) {
    throw new Error("No ID provided");
  }
  const { data } = useGetRecipeByIdQuery(+id);
  const recipeDetails = data?.meals[0] as Meal;
  return (
    <>
      <Banner bannerImg={bannerImg}>
        <Heading as="h3" zIndex={5} color="secondary.50">
          Recipe Details
        </Heading>
      </Banner>
      <Box py={9} bgImage={FoodBG}>
        <Container maxW="7xl">
          <SubHeader title={recipeDetails?.strMeal} />

          <Flex
            my={8}
            gap={{ base: 3, md: 6, lg: 10 }}
            flexDirection={{ base: "column", md: "column", lg: "row" }}
          >
            {!recipeDetails ? (
              <DetailsSkeleton />
            ) : (
              <>
                <Box>
                  <Image
                    src={recipeDetails?.strMealThumb}
                    alt={recipeDetails?.strMeal}
                    w={{ base: "100%", md: "300px" }}
                    borderRadius="xl"
                    cursor="pointer"
                  />
                </Box>
                <DetailsContent recipeDetails={recipeDetails} />
              </>
            )}
          </Flex>
          <SubHeader title="Ingredients" />
          {!recipeDetails ? (
            <SkeletonText mt="3" noOfLines={2} skeletonHeight="2" />
          ) : (
            <List
              mt={5}
              p={2}
              display="flex"
              alignItems="center"
              flexWrap="wrap"
              gap={2}
            >
              {recipeDetails &&
                Object.keys(recipeDetails).map((key, index) => {
                  if (
                    key.includes("strIngredient") &&
                    recipeDetails[key as keyof Meal]
                  ) {
                    const measureKey = key.replace(
                      "strIngredient",
                      "strMeasure"
                    );
                    const measure = recipeDetails[measureKey as keyof Meal];
                    return (
                      <ListItem
                        key={index}
                        bg="primary.500"
                        color="secondary.50"
                        p={2}
                        borderRadius="md"
                      >
                        {measure} {recipeDetails[key as keyof Meal]}
                      </ListItem>
                    );
                  } else {
                    return null;
                  }
                })}
            </List>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Details;
