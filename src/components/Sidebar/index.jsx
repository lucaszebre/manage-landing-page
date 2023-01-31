import React from 'react'
import { SideBarContainer, SideBarItems } from './SidebarElements'
function SideBar({isOpen, toggle}){
return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <SideBarItems>Pricing</SideBarItems>
        <SideBarItems>Product</SideBarItems>
        <SideBarItems>About Us</SideBarItems>
        <SideBarItems>Careers</SideBarItems>
        <SideBarItems>Community</SideBarItems>
    </SideBarContainer>
)
}

export default SideBar