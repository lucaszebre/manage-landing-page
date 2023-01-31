import styled from "styled-components";

export const SideBarContainer = styled.aside`
    position: absolute;
    z-index: 999;
    width: 90%;
    height: auto;
    display: block;
    background: white;
    align-items: center;
    top: 4rem;
    transition: 0.3s ease-in-out;
    -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    margin-right: ${({ isOpen }) => (isOpen ? "300rem" : "0rem")};
    @media screen and (min-width: 768px) {
        display: none;
    }
}`;	

export const CloseIcon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SideBarItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #0d0d0d; 
    padding: 2rem;
    list-style: none;
    transition: 0.2s ease-in-out;
`;