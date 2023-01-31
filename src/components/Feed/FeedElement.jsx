import styled from "styled-components";

export const FeedContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    order: 10000;
    
`;

export const FeedTitle = styled.h1`
    font-size: 2.5rem;
    color:#303855;
    margin-bottom:2em;
    `;

export const FeedBackWrap = styled.div`
width: 100%;
display: flex;
justify-content: center;
@media screen and (max-width: 768px) {
    flex-direction: column;
}
@media screen and (min-width: 768px) {
    
    flex-direction: row;
};`;

