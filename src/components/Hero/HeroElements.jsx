import styled from 'styled-components';

import bg from "../bg-simplify-section-desktop.svg";
export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    order: 1;
    
    @media screen and (min-width: 768px) {
        align-items: flex-start;
        text-align: left;

    }
    @media screen and (max-width: 768px) {
        width: 90%;
    }
    `;
export const HeroH1 = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: #454857;
    text-align: center;
    margin-bottom: 1rem;
    @media screen and (min-width: 768px) {
        text-align: left;
    }
    `;
export const HeroP = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    color: gray;
    text-align: center;
    margin-bottom: 1rem;
    line-height: 1.5;
    @media screen and (min-width: 768px) {
        text-align: left;
    }
    `;
export const HeroButton = styled.button`
    background-color: #f3603c;
    color: white;
    font-weight: 600;
    padding: .7rem 2.5rem .7rem 2.5rem;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    transition: all .3s ease-in-out;
    `;
export const HeroImage = styled.img`
width: 50%;
background-color:#FFF2CC;
border-radius: 1rem;
@media screen and (max-width: 768px) {

    width: 90%;
    height: 100%;
}

    `;
export const HeroContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    width: 90%;
    margin:1em 0 1em 0;
    
    @media screen and (max-width: 768px) {
        height: 100vh;
        padding: 0 2rem;
        margin-top: 2rem;
        order: 2;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    `;

