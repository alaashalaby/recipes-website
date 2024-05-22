import { Box, Heading, Text } from "@chakra-ui/react"
interface Props{
    subTitle: string,
    title: string
}
const SubTitle = ({subTitle,title}:Props) => {
  return (
    <Box textAlign="center" my={2}>
          <Text color="#f89223" mb={2}>{ subTitle}</Text>
          <Heading as="h3" size="2xl" color="#2e2f31">{ title}</Heading>
    </Box>
  );
}

export default SubTitle
