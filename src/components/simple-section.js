import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import GlobalStyle from "../global-styles";

import Button from "./button";

const animationProperties = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: -30 },
};

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
const Subtitle = styled(motion.h2)`
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
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <Main backgroundColor={props.backgroundColor}>
      <GlobalStyle />
      <Wrapper>
        <Subtitle
          titleColor={props.titleColor}
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animationProperties}
          className="square"
        >
          {props.children}
        </Subtitle>
        {props.content && (
          <Content textColor={props.textColor}>{props.content}</Content>
        )}
        {props.url && (
          <Button url={props.url} textButton={props.textButton}></Button>
        )}
      </Wrapper>
    </Main>
  );
};

export default SimpleSection;
