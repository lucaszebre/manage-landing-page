import styled from "styled-components";


export const AppContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  /* text-align: center; */
  padding: 1em;
  justify-content: space-between;
  order: 100;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    /* text-align: left; */
  }
`;

export const App = styled.div`
  margin: auto;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100%;
  margin-bottom: 6em;
`;

export const AppLeft= styled.div`
text-align: center;
align-items: center;
justify-content: center;
  width: 100%;
  margin-right: 8em;
`;

export const AppH1 = styled.h1`
  width: 100%;
  font-size: 2em;
  margin-bottom: 0.5em;
  color: #10101d;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const AppText = styled.p`
  width: 100%;
  color: gray;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const AppRight = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;




















