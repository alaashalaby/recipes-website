import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  List,
} from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  triggerButton: ReactNode;
  placement?: "left" | "right";
}
const CustomDrawer = ({
  isOpen,
  onClose,
  title,
  triggerButton,
  children,
  placement = "left"
}: Props) => {
  return (
    <>
      {triggerButton}
      <Drawer isOpen={isOpen} placement={placement} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            variant="none"
            border="1px solid #f89233"
            color="#f89233"
            borderRadius="full"
            bg="transparent"
          />
          <DrawerHeader>
            <Heading as="h4" fontSize="xl" textAlign="center" py={4}>
              {title}
            </Heading>
          </DrawerHeader>
          <DrawerBody>
            <List>{children}</List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
