import React from 'react'
import './Education.css'
import { Card, Heading, Stack } from "@chakra-ui/react"
import { Timeline, Text, Flex, Image, Box, Link } from "@chakra-ui/react";
import { CiCircleCheck } from "react-icons/ci";

const Education = () => {
    return (
        <div id="education">
            <Box className="education">
                <Text className="title">
                    education.
                </Text>
            </Box>

            <Flex
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'center', md: 'flex-start' }}
                justify="space-between"
                gap={6}
                mt={4}
                mb={2}
                px={4}
            >
                {/* Right: Logo */}
                <Box>
                    <Image
                        src="https://scmsgroup.org/masscom/wp-content/uploads/2023/06/SCMS-Logo-1-1024x971.png"
                        alt="SCMS Logo"
                        boxSize="80px"
                    />
                </Box>
                {/* Left: Heading + Timeline */}
                <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
                    <Text fontSize="xl" fontWeight="bold">
                        SCMS GROUP OF INSTITUTIONS
                    </Text>

                    <Timeline.Root maxW="900px" w="100%" mx="auto" mt={4}>
                        {[
                            {
                                role: "Bachelors Degree, Computer Science",
                                period: "June 2016 - Apr 2020",
                                cgpa: "7.49",
                            },
                        ].map((item, index) => (
                            <Timeline.Item key={index} pb={6}>
                                <Timeline.Content>
                                    <Timeline.Title fontSize="xl" fontWeight="semibold">
                                        {item.role}
                                    </Timeline.Title>
                                    <Timeline.Description fontSize="md" color="gray.600">
                                        {item.period}
                                    </Timeline.Description>
                                    <Timeline.Description fontSize="md" color="gray.600">
                                        Grade: {item.cgpa}
                                    </Timeline.Description>
                                </Timeline.Content>
                            </Timeline.Item>
                        ))}
                    </Timeline.Root>
                </Box>


            </Flex>



        </div>
    );

}

export default Education
