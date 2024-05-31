import { UseToastOptions, useToast } from "@chakra-ui/react";

const useCustomToast = () => {
  const toast = useToast();
  const showCustomToast = (options: UseToastOptions) => {
    toast({
      duration: 2000,
      isClosable: true,
      ...options,
    });
  };
  return { showCustomToast };
};

export default useCustomToast;