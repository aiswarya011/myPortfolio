import React from 'react'
import './Project-Wrapper.css'
import NavBars from '../Breadcrumb/navBars'
import Projects from './Projects/Projects'
import Footer from '../Footer/Footer'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import Skills from './Skills/Skills'

const ProjectWrapper = () => {
  const items = [
    { id: "projects", title: "Projects" },
    { id: "skills", title: "Skills" },
  ];
  return (
    <>
      <div className='project-wrapper'>
        <NavBars items={items}></NavBars>
        <Projects></Projects>
        <div style={{ height: "300px" }}></div>
        <Skills></Skills>
        <div style={{ height: "200px" }}></div>
        {/* <Experience></Experience> */}
        <ScrollToTop />
      </div>
      <Footer></Footer>
    </>

  )
}

export default ProjectWrapper
