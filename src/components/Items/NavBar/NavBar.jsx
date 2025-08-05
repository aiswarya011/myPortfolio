import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import {
    Button, CloseButton, useDisclosure, Drawer, Portal
} from "@chakra-ui/react"
import { RiDownloadLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { LuListCollapse } from "react-icons/lu";


const NavBar = ({ HandleCvDownload }) => {
    // eslint-disable-next-line no-unused-vars
    const { isOpen, onOpen, onClose } = useDisclosure();

    const navItems = [
        { link: '/', title: 'Home' },
        { link: '/about', title: 'About' },
        { link: '/project', title: 'Projects' },
        { link: '/contact', title: 'Contact' }
    ]
    return (
        <div>
            <nav className='align_center navbar'>
                <NavLink to='/'>
                    <h1 className='navbar_heading'>
                        Aiswarya Vinod
                    </h1>
                </NavLink>

                <div className='align_center navbar_links'>
                    {
                        navItems.map(nav => (
                            <NavLink
                                key={nav.link}
                                to={nav.link}
                                className={({ isActive }) =>
                                    isActive ? 'align_center links active' : 'align_center links'
                                }
                            >
                                {nav.title}
                            </NavLink>
                        ))
                    }

                </div>

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
                    <a href="https://www.linkedin.com/in/aiswarya-v-662b64195/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="linkedin-icon" />
                    </a>
                    <a href="https://github.com/aiswarya011?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="linkedin-icon" />
                    </a>
                </div>
            </nav>

            {/* Drawer for mobile menu */}
            <Drawer.Root>
                <Drawer.Trigger asChild>
                    <Button className="mobile_menu_button" variant="outline" size="sm">
                        <LuListCollapse />
                    </Button>
                </Drawer.Trigger>
                <Portal>
                    <Drawer.Backdrop />
                    <Drawer.Positioner>
                        <Drawer.Content style={{ width: '320px', padding: '24px',fontSize:'20px' }}>
                            <Drawer.Body  style={{ padding: '16px' }}>
                                
                                {navItems.map(nav => (
                                    <NavLink
                                        key={nav.link}
                                        to={nav.link}
                                        className={({ isActive }) =>
                                            isActive ? 'drawer_link active' : 'drawer_link'
                                        }
                                        onClick={onClose}
                                    >
                                        {nav.title}
                                    </NavLink>
                                ))}
                                <Button
                                    size="sm"
                                    onClick={() => {
                                        HandleCvDownload();
                                        onClose();
                                    }}
                                    mt={4}
                                    leftIcon={<RiDownloadLine />}
                                >
                                    Download CV
                                </Button>
                                <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                                    <a href="https://www.linkedin.com/in/aiswarya-v-662b64195/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size="20" />
                                    </a>
                                    <a href="https://github.com/aiswarya011?tab=repositories" target="_blank" rel="noopener noreferrer">
                                        <FaGithub size="20" />
                                    </a>
                                </div>
                            </Drawer.Body>
                            <Drawer.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Drawer.CloseTrigger>
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Portal>
            </Drawer.Root>
           

        </div >
    )
}

export default NavBar
