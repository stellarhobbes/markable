import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import GlobalStyle from "../global-styles";

import Button from "./button";

import WhiteLogo from "../images/logo-markable-white.png";
import BackgroundMeeting from "../images/markable-meeting-picture.jpg";

const animationProperties = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: -30 },
};

const Main = styled.div`
  background-image: url(${BackgroundMeeting});
  background-size: cover;
  height: 125vh;
`;
const Wrapper = styled.section``;
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
`;
const Image = styled.img`
  height: 50px;
`;

const Accroche = styled.div`
  padding: 100px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled(motion.h1)`
  color: white;
  text-align: center;
  @media (max-width: 960px) {
    font-size: 3.2em;
  }
`;
const Span = styled.span`
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-style: italic;
`;
const Content = styled.p`
  color: white;
  width: 50%;
  text-align: center;
  margin: 0px 0px 50px 0px;
  @media (max-width: 960px) {
    width: auto;
  }
`;

const Header = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <Main>
      <GlobalStyle />
      <Wrapper>
        <Logo>
          <Image src={WhiteLogo} alt="Logo de Markable"></Image>
        </Logo>
        <Accroche>
          <Title
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animationProperties}
          className="square"
          >
            Radicalement <Span>différent</Span>
          </Title>
          <Content>
            Vous souhaitez avoir une image à la hauteur de votre expertise et
            montrer ce qui vous rend unique&nbsp;? Markable vous aide à créer la
            stratégie de marque qui vous rendra définitivement et radicalement
            différent sur votre marché.
          </Content>
          <Button url={props.url} textButton={props.textButton}></Button>
        </Accroche>
      </Wrapper>
    </Main>
  );
};

export default Header;
