import SubTitle from "../components/SubTitle";
import FoodBG from "../assets/pattern.jpg";
import { Box, Center, Container} from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";
const ContactUs = () => {
  return (
    <Box bgImage={FoodBG} h={{base:"auto",md:"70vh",lg:"80vh"}}>
      <Container maxW="7xl" py={5}>
        <SubTitle subTitle="Get In Touch Now" title="Write a Message" />
       
        <Center mt={6}>

          <ContactForm />
        </Center>
      </Container>
    </Box>
  );
};

export default ContactUs;
