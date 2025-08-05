import React from 'react'
import './Projects.css'
import { ProjectData } from '@/shared/ProjectData'
import Card from '../card/card'


const Projects = () => {
    return (
        <div id='projects' className="projects-wrapper">
            <div className="projects" id="aboutMe">
                <span className="title"  style={{color: '#03045e'}}>projects.</span>
            </div>

            <div className='card'>
                {
                    ProjectData.data.map(p => (
                        <Card key={p.id} project={p}></Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
