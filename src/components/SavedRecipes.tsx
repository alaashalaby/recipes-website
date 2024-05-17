import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { BiBookmark } from "react-icons/bi";
import SavedItem from "./SavedItem";
const SavedRecipes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="Bookmark"
        variant="none"
        fontSize="2xl"
        me={2}
        border="1px solid #f89233"
        color="#f89233"
        borderRadius="full"
        icon={<BiBookmark />}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
        //   bg={colorMode === "light" ? " light.bgLight " : "dark.bgDark"}
        >
          <DrawerCloseButton
            variant="none"
            border="1px solid #f89233"
            color="#f89233"
            borderRadius="full"
            bg="transparent"
          />
          <DrawerHeader>
            <Heading as="h4" fontSize="xl" textAlign="center" py={4}>
              Your Saved Recipes
            </Heading>
          </DrawerHeader>
          <DrawerBody>
            <Flex gap={2} flexDirection="column">
              <Text
                color="#f89233"
                fontWeight="medium"
                fontSize="lg"
                textAlign="center"
                pt={9}
              >
                You Don't Have Any Saved Recipes Yet
              </Text>
              <SavedItem />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SavedRecipes;
