import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import CustomDrawer from "./CustomDrawer";
import { BiBookmark } from "react-icons/bi";
import SavedItem from "./SavedItem";
import { useAppSelector } from "../app/hooks";

const SavedRecipes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const recipes = useAppSelector(
    (state) => state.savedRecipesReducer.savedRecipes
  );

  return (
    <CustomDrawer
      title="Your Saved Recipes"
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      triggerButton={
        <Button
          onClick={onOpen}
          variant="none"
          fontSize="2xl"
          me={2}
          p={0}
          border="1px solid"
          borderColor="primary.500"
          color="primary.500"
          borderRadius="full"
          position="relative"
        >
          <BiBookmark />
          <Text
            width="20px"
            height="20px"
            borderRadius="50%"
            bg="primary.500"
            color="#fff"
            position="absolute"
            right="-5px"
            top="-9px"
            lineHeight="17px"
            border="1px solid"
            borderColor="primary.500"
            fontSize="sm"
            textAlign="center"
          >
            {recipes.length}
          </Text>
        </Button>
      }
    >
      <Flex gap={4} flexDirection="column">
        {recipes.length === 0 ? (
          <Text
            color="primary.500"
            fontWeight="medium"
            fontSize="lg"
            textAlign="center"
            pt={9}
          >
            You Don't Have Any Saved Recipes Yet
          </Text>
        ) : (
          recipes &&
          recipes.map((recipe) => <SavedItem key={recipe.idMeal} recipe={recipe} />)
        )}
      </Flex>
    </CustomDrawer>
  );
};

export default SavedRecipes;
