import styled from 'styled-components';

export const CardContainer = styled.div`
    margin-bottom: 2em;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    
`;

export const CardWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    
    justify-content: space-between;
    border-top-left-radius: .8rem;
    border-bottom-left-radius: .8rem;
    @media screen and (max-width: 768px) {
        background-color: #fff0eb;
    }
`;



export const CardH3 = styled.h3`
    width: 100%;
    font-size: .8em;
    color: #10101d;
    margin-bottom: -1em;
    margin-top: -1em;
`;

export const CardP = styled.p`
    width: 100%;
    color: gray;
    line-height: 1.5
`;

export const CardA = styled.a`
    color: white;
    background-color: #f26641;
    padding: .3em 1em .3em 1em;
    border-radius: .8rem;
    text-decoration: none;
    margin-right: 1em;
`;




