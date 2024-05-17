import { Flex, Skeleton, Stack } from "@chakra-ui/react";

const SavedItemSkeleton = () => {
  return (
    <Flex
      align="center"
      gap={3}
      padding="3"
      boxShadow="lg"
      bg="#fde5ca"
      borderRadius="lg"
    >
      <Skeleton width="60px" height="60px" borderRadius="lg" />
      <Stack flexGrow="1">
        <Skeleton startColor="orange.300" endColor="#f89223" height="10px" />
        <Skeleton startColor="#fde5ca" endColor="#f89223" height="10px" />
      </Stack>
    </Flex>
  );
};

export default SavedItemSkeleton;
