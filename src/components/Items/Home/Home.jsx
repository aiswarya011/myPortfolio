import React from 'react'
import './Home.css'
import { Button } from "@chakra-ui/react"
import { RiDownloadLine } from "react-icons/ri";
import myImage from '../../../assets/IMG_9492_Original.jpeg';

const Home = ({HandleCvDownload}) => {

  return (
    <>
      <div className="home">
        <div className="home-text">
          <span className='t1 fade-in'>Hello, I'm Aiswarya,</span>
          <p className='t2 fade-in'>Front End Developer, Master's Student</p>
          <p className='t3 fade-in'>based in Poland.</p>
          <Button
            onClick={() => HandleCvDownload()}
            size="sm"
            className='button fade-in'
            variant="solid">
            <RiDownloadLine />
            CV
          </Button>

        </div>

        <div className="home-image fade-in">
          <img src={myImage} alt="Aiswarya" />
        </div>
      </div>


    </>

  )
}

export default Home
