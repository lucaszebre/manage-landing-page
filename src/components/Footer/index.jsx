import React from 'react'
import { useState } from 'react'
import {FooterWrap,FooterError,FooterW2,FooterW1,FooterCols,FooterCopyRight, FooterForm,FooterRow,FooterButton2,FooterContainer, FooterButton, FooterSection1, FooterSection2, FooterText, FooterWrapper, FooterInput, FooterList, FooterListItem, FooterIcon, FooterIconItem, FooterLogo } from './FooterElements'
export const Footer = () => {

const [error, setError] = useState(false);
const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get('email'));
    console.log(validateEmail(data.get('email')));
    
    if (validateEmail(data.get('email'))) {
        setError(false);
    } else {
        setError(true);
    }
}
return (
    <FooterContainer>
        <FooterButton>Get Started</FooterButton>
        <FooterSection1>
            <FooterW1>
                <FooterText>Simplify how your team works today.</FooterText>
                <FooterButton2>Get Started</FooterButton2>
            </FooterW1>
        </FooterSection1>
        <FooterSection2>
            <FooterW2>
                <FooterCols>
                    <FooterForm onSubmit={handleSubmit}>
                        <FooterInput
                            name='email'
                        ></FooterInput>
                        <FooterButton >Go</FooterButton>
                    </FooterForm>
                    {error && <FooterError>please insert a valid email</FooterError>}
                    <FooterCopyRight>© 2020. All rights reserved</FooterCopyRight>
                </FooterCols>
                <FooterRow>
                    <FooterList>
                        <FooterListItem>Home</FooterListItem>
                        <FooterListItem>Pricing</FooterListItem>
                        <FooterListItem>Product</FooterListItem>
                        <FooterListItem>About us</FooterListItem>
                    </FooterList>
                    <FooterList>
                        <FooterListItem>Careers</FooterListItem>
                        <FooterListItem>Community</FooterListItem>
                        <FooterListItem>Privacy Policy</FooterListItem>
                    </FooterList>
                </FooterRow>
                <FooterWrap>
                    <FooterIcon>
                        <FooterIconItem src={'../../../images/icon-facebook.svg'} alt="facebook" />
                        <FooterIconItem src={'../../../images/icon-twitter.svg'} alt="youtube"/>
                        <FooterIconItem src={'../../../images/icon-pinterest.svg'} alt="twitter"/>
                        <FooterIconItem src={'../../../images/icon-instagram.svg'} alt="pinterest"/>
                        <FooterIconItem src={'../../../images/icon-youtube.svg'} alt="instagram"/>
                    </FooterIcon>
                
                    <FooterLogo src={'../../../images/logo.svg'} alt="logo-footer"/>
                </FooterWrap>
            </FooterW2>
        </FooterSection2>
    </FooterContainer>
        
    )
}

export default Footer