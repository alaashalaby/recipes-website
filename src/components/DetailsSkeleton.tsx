import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";
const DetailsSkeleton = () => {
  return (
    <>
      <Box flex="1">
        <Skeleton height="300px" borderRadius="xl" />
      </Box>
      <Box flex="1">
        <SkeletonText mt="3" noOfLines={1} skeletonHeight="2" />
        <SkeletonText mt="6" noOfLines={10} skeletonHeight="2" />
        <SkeletonText mt="5" noOfLines={1} skeletonHeight="2" />
        <Skeleton />
      </Box>
    </>
  );
};

export default DetailsSkeleton;
