
import img from "./illustration-intro.svg";

import React from 'react'
import { HeroContent, HeroH1, HeroP, HeroButton, HeroImage, HeroContainer} from './HeroElements'
const Hero = () => {
    return (
    <HeroContainer>
        <HeroContent>
            <HeroH1>Bring everyone together to build better products.</HeroH1>
            <HeroP>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</HeroP>
            <HeroButton>Get Started</HeroButton>
        </HeroContent>
        <HeroImage src={img} alt=""/>   
    </HeroContainer>
)
}

export default Hero
