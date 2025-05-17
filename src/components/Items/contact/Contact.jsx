import React, { useState } from 'react';
import {
    Button,
    Field,
    Fieldset,
    Input,
    Stack,
    Flex,
    Box,
    Text,
    Heading,
} from "@chakra-ui/react";
import './Contact.css';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RiDownloadLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SERVICEID, TEMPLATEID, USERID } from '@/shared/constants';
import Footer from '../Footer/Footer';



const schema = z.object({
    name: z.string().min(2, "Name is too short"),
    message: z.string().min(2, "Message should be longer"),
});

const Contact = ({ HandleCvDownload }) => {
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = useForm({
        resolver: zodResolver(schema),
        mode: "onChange"
    });

    const onSubmit = (formData) => {
        setLoading(true)
        const serviceId = SERVICEID;
        const templateId = TEMPLATEID;
        const userId = USERID;

        const data = {
            name: formData.name,
            message: formData.message,
        };

        emailjs.send(serviceId, templateId, data, userId)
            .then(() => {
                setLoading(false)
                toast.success(`Thank you for reaching out! Your message has been sent successfully. I'll get back to you as soon as possible."`, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                reset();
            })
            .catch(() => {
                setLoading(false)
                toast.error(`Please try again.`, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <>
            <div className="contact-wrapper">
                <Flex
                    direction={{ base: "column", md: "row" }}
                    gap={10}
                    maxW="1200px"
                    mx="auto"
                    p={4}
                    bg="white"
                    boxShadow="lg"
                    borderRadius="md"
                    flexWrap="wrap"
                >
                    {/* Paragraph - Right */}
                    <Box flex="1" display="flex" flexDirection="column" justifyContent="center">
                        <Heading size="md" mb={4} color="gray.800">
                            Open to Opportunities
                        </Heading>
                        <Text fontSize="lg" color="gray.700" lineHeight="tall">
                            I am currently seeking Angular developer opportunities in Poland.
                            With 3+ years of experience building scalable frontend applications
                            using Angular, TypeScript, and SCSS, I am excited to contribute to
                            modern, dynamic teams. If you believe I could be a great fit, feel
                            free to get in touch through the contact form!
                        </Text>
                        <div className="navbar_right">
                            <Button
                                size="sm"
                                onClick={HandleCvDownload}
                                className="button"
                                variant="solid"
                            >
                                <RiDownloadLine />
                                CV
                            </Button>
                            <a href="https://www.linkedin.com/in/aiswarya-vinod-662b64195/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="linkedin-icon" />
                            </a>
                            <a href="https://github.com/aiswarya011?tab=repositories" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="linkedin-icon" />
                            </a>
                        </div>
                    </Box>
                    {/* Form - Left */}
                    <Box flex="1">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Fieldset.Root width="100%">
                                <Stack spacing={6}>
                                    <Fieldset.Legend fontSize="2xl" fontWeight="bold">
                                        Contact details
                                    </Fieldset.Legend>
                                    <Fieldset.HelperText>
                                        Please provide your contact details below.
                                    </Fieldset.HelperText>

                                    <Fieldset.Content>
                                        <Field.Root>
                                            <Field.Label>Name</Field.Label>
                                            <Input {...register("name")} />
                                            {errors.name && (
                                                <Text color="red.500" fontSize="sm">
                                                    {errors.name.message}
                                                </Text>
                                            )}
                                        </Field.Root>

                                        <Field.Root>
                                            <Field.Label>Message</Field.Label>
                                            <Input {...register("message")} />
                                            {errors.message && (
                                                <Text color="red.500" fontSize="sm">
                                                    {errors.message.message}
                                                </Text>
                                            )}
                                        </Field.Root>
                                    </Fieldset.Content>
                                    {
                                        !loading &&
                                        <Button
                                            type="submit"
                                            disabled={!isValid}
                                            alignSelf="flex-start"
                                            mt={4}
                                            p={2}
                                            colorScheme="yellow"
                                        >
                                            Send Message
                                        </Button>

                                    }
                                    {
                                        loading &&
                                        <Button
                                            alignSelf="flex-start"
                                            mt={4}
                                            p={2} loading loadingText="Sending...">
                                            Sending
                                        </Button>
                                    }

                                </Stack>
                            </Fieldset.Root>
                        </form>
                    </Box>


                </Flex>


            </div>
            <Footer></Footer>
        </>

    );
};

export default Contact;
