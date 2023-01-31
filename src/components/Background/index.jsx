import React from 'react'
import {BackGroundContainer} from './BackElements'
import Navbar from '../Nav'
import App from '../../Pages/App.js'
import Footer from '../Footer'
import Hero from '../Hero';
import Feed from '../Feed/Feed.js';
import SideBar from '../Sidebar'

import {useState} from 'react'
export const BackGround = () => {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}

return (
    <BackGroundContainer>
        <SideBar isOpen={isOpen} toggle={toggle}  />
        <Navbar toggle={toggle}/>
        < Hero/>
        < App/>
        < Feed/>
        < Footer/>
    </BackGroundContainer>
)
}

export default BackGround