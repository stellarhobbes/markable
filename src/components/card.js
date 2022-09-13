import React from "react";
import styled from "styled-components";
import GlobalStyle from "../global-styles";

import { FaArrowCircleDown } from "react-icons/fa";

const Wrapper = styled.div`
  background-color: #ffffff09;
  border-radius: 10px;
  padding: 25px;
`;

const Content = styled.p`
  color: white;
  font-weight: 200;
  font-size: 1.1em;
`;

const Card = (props) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <FaArrowCircleDown size="30" color="#f10c35"/>
      <Content>{props.children}</Content>
    </Wrapper>
  );
};

export default Card;
