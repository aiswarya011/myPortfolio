import React from 'react'
import './About.css'
import { ABOUT_BOLD, ABOUT_DES } from '@/shared/constants';
import NavBars from '../Breadcrumb/navBars';
import AboutMe from './AboutMe/AboutMe';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from '../Footer/Footer';


const About = () => {
    const items = [
        { id: "aboutMe", title: "About Me" },
        { id: "experience", title: "Experience" },
        { id: "education", title: "Education" },
    ];
    return (
        <>
            <div className="about-wrapper">
                <NavBars items={items}></NavBars>
                <AboutMe></AboutMe>
                <div style={{ height: "400px" }}></div>
                <Experience></Experience>
                <div style={{ height: "100px" }}></div>
                <Education></Education>
                <div style={{ height: "240px" }}></div>

                <ScrollToTop />
            </div >
            <Footer></Footer>
        </>


    )
}

export default About
