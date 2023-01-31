import styled from "styled-components";

export const FeedbackContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    text-align: center;
    margin-bottom: 2em;
    @media screen and (min-width: 768px) {
        margin-right: 1em;
    }
`;

export const FeedbackImage = styled.img`
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    margin-bottom: -.5em;
    z-index: 100;
`;

export const FeedbackName = styled.h3`
    font-size: 1rem;
    margin-bottom: 1em;
    color:#303855;
`;

export const FeedbackText = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 500;
    color:#a9aaae;
    padding: .5em;
`;

export const FeedBackWrap = styled.div`
    background:#fafafa;
    width: 100%;
`;
