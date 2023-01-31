import React from 'react'
import {Nav, NavLogo, NavMenu, NavItems, Button,NavOpen} from './NavElements'
import open from './icon-hamburger.svg'



function Navbar({toggle}) {
  return (
    <>
    <Nav>
          <NavLogo  src={'./images/logo.svg'} alt="logo" onClick={toggle} />
          <NavOpen src={open} alt="Menu"  onClick={toggle}/>
          <NavMenu>
            <NavItems>Pricing</NavItems>
            <NavItems>Product</NavItems>
            <NavItems>About us</NavItems>
            <NavItems>Careers</NavItems>
            <NavItems>Community</NavItems>
          </NavMenu>
          <Button>Get Started</Button>
        </Nav>
    </>
  )
    }
        
        
  

export default Navbar



