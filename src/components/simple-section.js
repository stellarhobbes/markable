import React from "react";
import styled from "styled-components";
import GlobalStyle from "../global-styles";

import Button from "./button";

const Main = styled.div`
  background-color: ${(props) =>
    props.backgroundColor === "white" ? "#fffff" : "#0B0F10"};
  padding: 100px 0px;
`;
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Subtitle = styled.h2`
  color: ${(props) => (props.titleColor === "black" ? "#000000" : "#ffffff")};
  text-align: center;
`;
const Content = styled.p`
  color: ${(props) => (props.textColor === "black" ? "#000000" : "#ffffff")};
  text-align: center;
  width: 50%;
  @media (max-width: 960px) {
    width: auto;
  }
`;

const SimpleSection = (props) => {
  return (
    <Main backgroundColor={props.backgroundColor}>
      <GlobalStyle />
      <Wrapper>
        <Subtitle titleColor={props.titleColor}>{props.children}</Subtitle>
        {props.content && (
          <Content textColor={props.textColor}>{props.content}</Content>
        )}
        {props.url && <Button textButton={props.textButton}></Button>}
      </Wrapper>
    </Main>
  );
};

export default SimpleSection;
