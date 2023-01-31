import styled from 'styled-components';
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    order: 40000;
    text-align: center;
    width: 100%;
    `;

export const FooterSection1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: auto;
    padding-bottom: 2em;
    background: #f3603c url(../../../images/bg-simplify-section-mobile.svg) no-repeat;
    background-size: 4rem;
    background-position: left;
    @media screen and (min-width: 768px) {
        
        background-position: right;
        
        background: #f3603c  no-repeat;
        background-Image: url(../../../images/bg-simplify-section-desktop.svg);
    };
    @media screen and (max-width: 768px) {
        background-size: 12rem;
    };
`;

export const FooterButton = styled.button`
background-color: #f3603c;
color: white;
font-weight: 600;
padding: 0.7rem 2.5rem 0.7rem 2.5rem;
border: none;
border-radius: 2rem;
cursor: pointer;
-webkit-transition: all .3s ease-in-out;
transition: all .3s ease-in-out;
margin: 1rem 0 1rem 0;
    `;
    export const FooterButton2 = styled.button`
    border-radius: 50px;
    background:#fff ;
    color: #f3603c;
    font-weight: 600;
    padding: 0.7rem 2.5rem 0.7rem 2.5rem;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    `;


export const FooterText = styled.p`
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
    
    
    @media screen and (max-width: 768px) {
        width: 85%;
        padding: .5em 3em 0 3em;
    }
    
    `;

export const FooterSection2 = styled.div`
width: 100%;
background: #1e1e26;
display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
width: 100%;
margin: auto;
height: auto;
@media screen and (max-width: 768px) {

    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em 0 1em 0;
    
    
}
@media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    
    align-items: center;
}
    `;

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    `;

export const FooterInput = styled.input`
    padding: 10px 20px;
    border-radius: 50px;
    outline: none;
    border: none;
    margin: 0 .5em;
    `;

export const FooterList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    flex-direction: column;
    `;
export const FooterListItem = styled.li`
    margin: 0 1rem;
    color: #fff;
    padding: .3em 0 .3em 0;
    `;
export const FooterIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {

    margin:2em 0 2em 0;
    }

    `;

export const FooterIconItem = styled.img`
    margin: 0 .7em;
    width: 35px;
    height: 35px;
    cursor: pointer;
    @media screen and (min-width: 768px) {
        width:15px;
        height: 15px;
        margin: 0 .35em;
    }
    `;
export const FooterLogo = styled.img`
    padding-top: 1.5em;
    width:8rem;
    height: 1.8rem;
    `;
export const FooterRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    `;
    
export const FooterForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    
    `;
    export const FooterWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    `;

export const FooterCopyRight = styled.p`
    color: #fff;
    font-size: 1rem;
    text-align: center;
    
    `;
export const FooterCols = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const FooterW1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    flex-direction: row;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        ;
        }
        @media screen and (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            ;
            }

    `;
export const FooterW2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    flex-direction: row-reverse;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        ;
        }
    `;

export const FooterError = styled.div`
    color: red;
    font-size: 1rem;
    text-align: center;
    `;
