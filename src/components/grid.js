import React from "react";
import styled from "styled-components";
import GlobalStyle from "../global-styles";

const Main = styled.div`
  background-color: ${(props) =>
    props.backgroundColor === "white" ? "#fffff" : "#0B0F10"};
  padding-bottom: 50px;
  padding-top: 0px;
`;
const Wrapper = styled.section`
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 2em;
  row-gap: 2em;
  @media (max-width: 960px) {
   width: 90%;
  }
  @media (max-width: 550px) {
   grid-template-columns: 1fr;
  }
`;

const Grid = (props) => {
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        {props.children}
      </Wrapper>
    </Main>
  );
};

export default Grid;
