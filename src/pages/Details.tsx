import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import FoodBG from "../assets/pattern.jpg";
import { useParams } from "react-router-dom";
import { BiLinkExternal, BiPurchaseTag, BiWorld } from "react-icons/bi";
import { useGetRecipeByIdQuery } from "../RTK/services/recipes";

const DetailsContent = ({ recipeDetails }: { recipeDetails: Meal }) => {
  return (
    <Box p={4}>
      <Heading as="h4" color="#2e2f31" mb={3} fontSize="3xl">
        {recipeDetails?.strMeal}
      </Heading>
      <Text noOfLines={4} color="#2e2f31" mb={4}>
        {recipeDetails?.strInstructions}
      </Text>
      <List
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        gap={3}
        mb={3}
        sx={{
          li: {
            color: "#2e2f31",
            border: "1px solid #f89223",
            p: "2",
            borderRadius: "md",
            letterSpacing: "2px",
            fontWeight: "medium",
            display: "flex",
            alignItems: "center",
            gap: "2",
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
      </List>
      <Link
        href={recipeDetails?.strYoutube}
        isExternal
        color="#f89223"
        border="1px solid #f89223"
        w="fit-content"
        borderRadius="md"
        letterSpacing="2px"
        display="flex"
        alignItems="center"
        gap={2}
        p={2}
        _hover={{ textDecoration: "none" }}
      >
        YoutTube <BiLinkExternal fontSize="1.3em" />
      </Link>
    </Box>
  );
};

const Details = () => {
  const { id } = useParams();
  if (!id) {
    throw new Error("No ID provided");
  }
  const { data } = useGetRecipeByIdQuery(+id);
  const recipeDetails = data?.meals[0] as Meal;
  return (
    <Box bgImage={FoodBG} h="100vh" pt={9}>
      <Container maxW="4xl" bg="#fff3e5" py={8}>
        <SimpleGrid columns={[1, 1, 2]}>
          <Box mt={4} cursor="pointer">
            <Image
              src={recipeDetails?.strMealThumb}
              borderRadius="md"
              width="min(280px,100%)"
              m="auto"
            />
          </Box>
          <DetailsContent recipeDetails={recipeDetails} />
        </SimpleGrid>
        <List
          mt={5}
          p={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          gap={2}
        >
          {recipeDetails &&
            Object.keys(recipeDetails).map((key, index) => {
              if (key.includes("strIngredient") && recipeDetails[key as keyof Meal]) {
                const measureKey = key.replace("strIngredient", "strMeasure");
                const measure = recipeDetails[measureKey as keyof Meal];
                return (
                  <ListItem
                    key={index}
                    bg="#f89223"
                    color="#fff"
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
      </Container>
    </Box>
  );
};

export default Details;
