import {
  Box,
  Center,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTelegram,
} from "react-icons/bi";
import SubTitle from "./SubTitle";
import chefsData from "../Data/chef";
const ChefList = () => {
  return (
    <Box mt={9} py={2}>
      <SubTitle subTitle={"Explore Our Chefs"} title={"Our Chefs"} />
      <SimpleGrid columns={[1,2,3,4]} spacing={5} mx={8} mt={6}>
        {chefsData && chefsData.map(chef => (
          <Chef chef={chef} key={ chef.id} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ChefList;

const Chef = ({chef}:{chef:Chef}) => {
  return (
    <Box shadow="lg" borderRadius="lg" p={3} _hover={{transform:"translateY(-10px)",cursor:"pointer"}} transition="transform 0.4s ease-in-out">
      <Image src={chef.imageUrl} alt={chef.name} borderRadius="8px 8px 0 0" h={320} w="100%" objectFit="cover"/>
      <Box textAlign="center" mt={3}>
        <Heading as="h4" fontSize="xl" mb={1}>
          {chef.name}
        </Heading>
        <Text fontSize="sm">{chef.specialty}</Text>
      </Box>
      <Center
        gap={3}
        mt={3}
        sx={{
          a: {
            color:"#8C8E91",
            border: "1px solid #EBEBEB;",
            borderRadius: "50%",
            fontSize: "lg",
            p: "2",
            transition:"all 0.5s ease-in-out",
            ":hover": {
              bg: "#f89223",
              borderColor:"#f89223",
              color:"#fff"
            }
          },
        }}
      >
        <Link>
          <BiLogoFacebook />
        </Link>
        <Link>
          <BiLogoLinkedin />
        </Link>
        <Link>
          <BiLogoInstagram />
        </Link>
        <Link>
          <BiLogoTelegram />
        </Link>
      </Center>
    </Box>
  );
};
