import { Timeline, Text, Flex, Image } from "@chakra-ui/react";
import { CiCircleCheck } from "react-icons/ci";

const Experience = () => {
    return (
        <div id="experience" style={{ padding: "2rem 1rem" }}>
            <div className="experience">
                <span className="title" style={{ color: '#03045e' }}>
                    experience.
                </span>
            </div>

            <Flex align="center" gap={3} mt={6} mb={2}>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5-zEKteRFNmbG2OWrBhVStmH97Gs-YjHJ6A&s" alt="Infosys Logo" boxSize="60px" />
                <Text fontSize="xl" fontWeight="bold">
                    360 Software House.
                </Text>
            </Flex>
            <Timeline.Root maxW="900px" w="100%" mx="auto" mt={8} px={4}>
                {[
                    {
                        role: "React Developer Intern",
                        period: "Dec 2025 - Mar 2026",

                    },
                ].map((item, index) => (
                    <Timeline.Item key={index} pb={6}>
                        <Timeline.Connector>
                            <Timeline.Separator />
                            <Timeline.Indicator>
                                <CiCircleCheck size={24} /> {/* Larger icon */}
                            </Timeline.Indicator>
                        </Timeline.Connector>
                        <Timeline.Content>
                            <Timeline.Title fontSize="xl" fontWeight="semibold">
                                {item.role}
                            </Timeline.Title>
                            <Timeline.Description fontSize="md" color="gray.600">
                                {item.period}
                            </Timeline.Description>
                        </Timeline.Content>
                    </Timeline.Item>
                ))}
            </Timeline.Root>
            <Flex align="center" gap={3} mt={6} mb={2}>
                <Image src="https://static.vecteezy.com/system/resources/previews/020/336/451/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg" alt="Infosys Logo" boxSize="60px" />
                <Text fontSize="xl" fontWeight="bold">
                    Infosys ltd.
                </Text>
            </Flex>
            <Timeline.Root maxW="900px" w="100%" mx="auto" mt={8} px={4}>
                {[
                    {
                        role: "Technology Analyst",
                        period: "May 2023 - Apr 2024",
                    },
                    {
                        role: "System Systems Engineer",
                        period: "Sept 2022 - Apr 2023",
                    },
                    {
                        role: "Systems Engineer",
                        period: "Mar 2021 - Aug 2022",
                    },
                ].map((item, index) => (
                    <Timeline.Item key={index} pb={6}>
                        <Timeline.Connector>
                            <Timeline.Separator />
                            <Timeline.Indicator>
                                <CiCircleCheck size={24} /> {/* Larger icon */}
                            </Timeline.Indicator>
                        </Timeline.Connector>
                        <Timeline.Content>
                            <Timeline.Title fontSize="xl" fontWeight="semibold">
                                {item.role}
                            </Timeline.Title>
                            <Timeline.Description fontSize="md" color="gray.600">
                                {item.period}
                            </Timeline.Description>
                        </Timeline.Content>
                    </Timeline.Item>
                ))}
            </Timeline.Root>

            <Flex align="center" gap={3} mt={6} mb={2}>
                <Image src="https://cezim.pl/wp-content/uploads/2021/12/empty.jpg" alt="Infosys Logo" boxSize="60px" />
                <Text fontSize="xl" fontWeight="bold">
                    Japan HighSoft.
                </Text>
            </Flex>
            <Timeline.Root maxW="900px" w="100%" mx="auto" mt={8} px={4}>
                {[
                    {
                        role: "Intersnip Trainee",
                        period: "Mar 2019 - Mar 2019",

                    },
                ].map((item, index) => (
                    <Timeline.Item key={index} pb={6}>
                        <Timeline.Connector>
                            <Timeline.Separator />
                            <Timeline.Indicator>
                                <CiCircleCheck size={24} /> {/* Larger icon */}
                            </Timeline.Indicator>
                        </Timeline.Connector>
                        <Timeline.Content>
                            <Timeline.Title fontSize="xl" fontWeight="semibold">
                                {item.role}
                            </Timeline.Title>
                            <Timeline.Description fontSize="md" color="gray.600">
                                {item.period}
                            </Timeline.Description>
                        </Timeline.Content>
                    </Timeline.Item>
                ))}
            </Timeline.Root>
        </div>
    );
};
export default Experience