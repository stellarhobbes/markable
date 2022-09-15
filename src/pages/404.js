import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "../global-styles";
import Marquee from "react-fast-marquee";

import Button from "../components/button";

const Body = styled.body`
  margin: 0px;
`;
const Main = styled.div`
  color: white;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  margin: 0px;
  @media (max-width: 960px) {
    font-size: 2em;
  }
`;
const Subtitle = styled.p`
  margin: 0px;
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-style: italic;
`;

const NotFoundPage = () => {
  return (
    <Body style={{ backgroundColor: "#0b0f10" }}>
      <GlobalStyle />
      <Main>
        <Marquee gradientWidth="0" direction="left">
          <Title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maaaaaaaaaaaaaaaaaaaaaaaaaaark&nbsp;!</Title>
        </Marquee>
        <Subtitle>( je t'aime )</Subtitle>
        <div style={{ marginBottom: "50px" }}></div>
        <Link to="/">
          <Button textButton="Retour à l'accueil"></Button>
        </Link>
      </Main>
    </Body>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
