import { Box, Heading, Text } from "@chakra-ui/react";
interface Props {
  subTitle: string;
  title: string;
}
const SubTitle = ({ subTitle, title }: Props) => {
  return (
    <Box textAlign="center" my={2}>
      <Text color="primary.500" mb={2} as="span" display="block">
        {subTitle}
      </Text>
      <Heading as="h3" fontSize="3xl" color="secondary.800">
        {title}
      </Heading>
    </Box>
  );
};

export default SubTitle;
