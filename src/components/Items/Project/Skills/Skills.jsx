import React from 'react'
import './Skills.css'
import { Box, Collapsible,Text } from "@chakra-ui/react"

const Skills = () => {
    return (
        <div id='skills' className="skills-wrapper">
            <div className="skills" id="aboutMe">
                <span className="title">skills.</span>
            </div>

            <div>
                <Text fontSize="sm" color="gray.500" mb={2}>
                    Click on the titles below to expand and see more details.
                </Text>
                <Collapsible.Root unmountOnExit fontSize="lg" fontWeight="semibold">
                    <Collapsible.Trigger
                        cursor="pointer"
                        paddingY="4" fontSize="lg"
                        fontWeight="semibold"
                        borderBottom="1px solid #ccc"
                        _hover={{ bg: '#f8f3a9' }}
                    >
                        Frontend Development
                    </Collapsible.Trigger>
                    <Collapsible.Content>
                        <Box padding="4" borderWidth="1px">
                            Angular 15+, HTML5, CSS3, Typescript, JavaScript, React.js
                        </Box>
                    </Collapsible.Content>
                </Collapsible.Root>

                <Collapsible.Root unmountOnExit fontSize="lg" fontWeight="semibold">
                    <Collapsible.Trigger
                        borderBottom="1px solid #ccc"
                        _hover={{ bg: '#f8f3a9' }}
                        cursor="pointer"
                        paddingY="4"
                        fontSize="lg"
                        fontWeight="semibold"
                    >
                        Cloud & DevOps
                    </Collapsible.Trigger>
                    <Collapsible.Content>
                        <Box padding="4" borderWidth="1px">
                            CI/CD Pipelines, Docker, Firebase, Netlify, Git, GitLab, GitHub
                        </Box>
                    </Collapsible.Content>
                </Collapsible.Root>

                <Collapsible.Root unmountOnExit fontSize="lg" fontWeight="semibold">
                    <Collapsible.Trigger borderBottom="1px solid #ccc"
                        _hover={{ bg: '#f8f3a9' }}
                        cursor="pointer"
                        paddingY="4"
                        fontSize="lg"
                        fontWeight="semibold">Debugging tools /Testing</Collapsible.Trigger>
                    <Collapsible.Content>
                        <Box padding="4" borderWidth="1px">
                            Cypress, Karma, Jasmine, Jest, Playwright
                        </Box>
                    </Collapsible.Content>
                </Collapsible.Root>


                <Collapsible.Root unmountOnExit fontSize="lg" fontWeight="semibold">
                    <Collapsible.Trigger borderBottom="1px solid #ccc"
                        _hover={{ bg: '#f8f3a9' }}
                        cursor="pointer"
                        paddingY="4"
                        fontSize="lg"
                        fontWeight="semibold">Soft Skills</Collapsible.Trigger>
                    <Collapsible.Content>
                        <Box padding="4" borderWidth="1px">
                            Effective Communication, Problem-Solving, Time Management, Team Collaboration, Leadership, Adaptability
                        </Box>
                    </Collapsible.Content>
                </Collapsible.Root>
            </div>

        </div>
    )
}

export default Skills
