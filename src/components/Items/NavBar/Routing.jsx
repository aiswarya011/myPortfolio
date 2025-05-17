import React from 'react'
import Home from '../Home/Home'
import PageNotFound from '../../../shared/PageNotFound'
import About from '../About/About'
import { Route, Routes } from 'react-router-dom'
import ProjectWrapper from '../Project/Project-Wrapper'
import Contact from '../contact/Contact'

const Routing = ({HandleCvDownload}) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home HandleCvDownload={HandleCvDownload} />}></Route>
                <Route path='/about' element={<About />}></Route>
                 <Route path='/project' element={<ProjectWrapper />}></Route>
                   <Route path='/contact' element={<Contact HandleCvDownload={HandleCvDownload}/>}></Route>
                <Route path='*' element={<PageNotFound />}></Route>
            </Routes>
        </div>
    )
}

export default Routing
