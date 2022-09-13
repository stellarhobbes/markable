import React from "react";
import styled from "styled-components";
import GlobalStyle from "../global-styles";

const Main = styled.div``;

const Wrapper = styled.section`
  padding: 10px 0px;
  width: 60%;
  display: flex;
  flex-direction: ${(props) =>
    props.isReverse === "yes" ? "row-reverse" : "row"};
  align-items: center;
  justify-content: space-between;
  @media (max-width: 960px) {
   flex-direction: column;
   width: 90%;
  }
`;

const TitleBloc = styled.div`
  padding: 0px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 150px;
`;
const Subtitle = styled.h3`
    text-align: center;
`;
const Number = styled.p`
  font-family: "Playfair Display", serif;
  font-weight: 800;
  font-size: 7em;
  margin: 0px;
  margin-top: -70px;
  color: #cacaca;
  z-index: -1;
`;
const Content = styled.p`
  text-align: ${(props) => (props.textAlign === "right" ? "right" : "left")};
  width: 70%;
  @media (max-width: 960px) {
   width: 90%;
   padding-bottom: 50px;
   text-align: center;
   margin-top: -30px;
   border-bottom: 0.5px solid #818181;
  }
`;

const Benefice = (props) => {
  return (
    <Main>
      <GlobalStyle />
      <Wrapper isReverse={props.isReverse}>
        <TitleBloc>
          <Image src={props.url} alt={props.alt}></Image>
          <Subtitle>{props.subtitleText}</Subtitle>
          <Number>{props.number}</Number>
        </TitleBloc>
        <Content textAlign={props.textAlign}>{props.children}</Content>
      </Wrapper>
    </Main>
  );
};

export default Benefice;
