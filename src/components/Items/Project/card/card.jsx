import React from 'react'
import { Button, Image, Text, Flex, Card } from "@chakra-ui/react"
import './Card.css'

const card = ({ project }) => {

    return (
        <div>
            <Card.Root maxW="250px" overflow="hidden" style={{ marginBottom: '1.5rem' }}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={project.img}
                        alt="Green double couch with wooden legs"
                        objectFit="cover"
                        height="150px"
                        width="100%"
                    />
                </a>

                <Card.Body gap="2" p={4}>
                    <Card.Title>{project.title}</Card.Title>
                </Card.Body>
                <Card.Footer gap="2" p={2} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Button as="a" href={project.gitHub} target="_blank" variant="ghost">GitHub</Button>
                    <Button as="a" href={project.link} target="_blank" variant="ghost">Application</Button>
                </Card.Footer>
            </Card.Root>
        </div>
    )
}

export default card
