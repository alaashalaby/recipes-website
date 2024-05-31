import { ComponentStyleConfig } from "@chakra-ui/react";

const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      borderRadius: "full",
      fontSize: "lg",
    },
  },
  variants: {
    outline: {
      field: {
        borderColor: "primary.500",
        _placeholder: {
          fontSize: "md",
        },
        _hover: {
          borderColor: "primary.500",
        },
        _focus: {
          borderColor: "primary.500",
        },
      },
    },
  },
};
export default Input;
