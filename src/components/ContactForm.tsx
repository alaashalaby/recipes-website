import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useState } from "react";
const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const toast = useToast();
  const[isLoading,setIsLoading]=useState(false)
  const serviceId: string = import.meta.env.VITE_SERVICE_ID;
  const templateId: string = import.meta.env.VITE_TEMPLATE_ID;
  const publicId: string = import.meta.env.VITE_PUBLIC_ID;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<FormData> = (data) => {
    setIsLoading(true)
    emailjs
      .send(
        serviceId,
        templateId,
        { name: data.name, email: data.email, message: data.message },
        publicId
      )
      .then(
        () => {
          toast({
            title: "Message Sent Successfully",
            status: "success",
            duration: 2000,
            position: "top-right",
            isClosable: true,
          });
          setIsLoading(false)
          reset()
        },
        (error) => {
          toast({
            title: "Error",
            description: error.text,
            status: "error",
            duration: 2000,
            position: "top-left",
            isClosable: true,
          });
          setIsLoading(false)
        });
  };
  return (
    <Flex
      flexDirection="column"
      gap={3}
      flex={{base:"1",md:"0.5"}}
      p={3}
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <HStack spacing={3} flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}>
        <FormControl isInvalid={!!errors?.name}>
          <FormLabel htmlFor="Name" color="primary.500">
            Name
          </FormLabel>
          <Input
            type="text"
            placeholder="Enter Your Name"
            {...register("name")}
            border="1px solid"
            borderColor="primary.500"
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors?.email}>
          <FormLabel htmlFor="email" color="primary.500">
            Email
          </FormLabel>
          <Input
            type="email"
            placeholder="Enter Your Email"
            {...register("email")}
            border="1px solid"
            borderColor="primary.500"
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
      </HStack>
      <FormControl isInvalid={!!errors?.message}>
        <FormLabel htmlFor="message" color="primary.500">
          Message
        </FormLabel>
        <Textarea
          resize="none"
          placeholder="Enter Your Message..."
          {...register("message")}
          id="message"
          border="1px solid"
          borderColor="primary.500"
        />
        <FormErrorMessage>
          {errors.message && errors.message.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        type="submit"
        w="fit-content"
        _hover={{ opacity: "0.9" }}
        mt={{ base: "1", lg: "3" }}
        isLoading={isLoading}
      >
        Send Message
      </Button>
    </Flex>
  );
};

export default ContactForm;
