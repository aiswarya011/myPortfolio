import React from 'react'
import './AboutMe.css'
import { ABOUT_DES, ABOUT_BOLD, } from '@/shared/constants';
import NavBars from '../../Breadcrumb/navBars';

const about_meMe = () => {

    return (

        <div className="about_me-wrapper">
            <div className="about_me" id="aboutMe">
                <span className="title">about me.</span>
                <p className="des">{ABOUT_DES}</p>
                <p className="des_bold">{ABOUT_BOLD}</p>
            </div>

        </div>
    )
}

export default about_meMe
