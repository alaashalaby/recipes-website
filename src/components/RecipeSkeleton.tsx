import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const RecipeSkeleton = () => {
  return (
    <Box borderRadius="xl" p={2}>
      <Skeleton height="250px" borderRadius="xl" />
      <SkeletonText mt="3" noOfLines={1} skeletonHeight="2" />
      <SkeletonText mt="3" noOfLines={1} skeletonHeight="2" />
      <Skeleton />
    </Box>
  );
};

export default RecipeSkeleton;
