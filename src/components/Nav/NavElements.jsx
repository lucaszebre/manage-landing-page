import styled from 'styled-components';

export const Nav = styled.nav`
position: sticky;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 10;
flex: 1;
width: 90%;
padding-top: 1rem;

@media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    }
`;

export const NavLogo = styled.img`

`;
export const Button = styled.button`

background-color: #f3603c;
color: white;
font-weight: 600;
padding: .7rem 2rem .7rem 2rem;
border: none;
border-radius: 2rem;
cursor: pointer;
transition: all .3s ease-in-out;
@media screen and (max-width: 768px) {
    display: none;
    }`;

export const NavMenu = styled.ul`
display: flex;
list-style: none;
justify-content: space-around;
@media screen and (max-width: 768px) {
    display: none;
}
`;
export const NavItems = styled.li`
font-size: .9rem;
margin: 0 .5rem;
font-weight: 700;
color: #454857;
cursor: pointer;
`;




export const NavOpen = styled.img`
display: none;
@media screen and (max-width: 768px) {
display: flex;
width: 2rem;
height: 2rem;
color: #454857;
cursor: pointer;
}

`;
