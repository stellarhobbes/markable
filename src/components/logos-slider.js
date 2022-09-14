import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

import Accenture from "../images/logos/logo-accenture.png";
import Bouygues from "../images/logos/logo-bouygues.png";
import Capital from "../images/logos/logo-capital.png";
import Eductive from "../images/logos/logo-eductive.png";
import Eiffage from "../images/logos/logo-eiffage.png";
import Google from "../images/logos/logo-google.png";
import Ionis from "../images/logos/logo-ionis.png";
import MondialRelay from "../images/logos/logo-mondialrelay.png";
import Nike from "../images/logos/logo-nike.png";
import RabotDutilleul from "../images/logos/logo-rabotdutilleul.png";
import Realites from "../images/logos/logo-realites.png";

const Main = styled.div`
  background-color: #ffffff;
  padding: 50px 0px;
`;
const Logo = styled.img`
  width: 75px;
  padding: 0px 45px;
`;

const LogosSlider = () => {
  return (
    <Main>
      <Marquee gradientWidth="0"  direction="right">
        <Logo src={Accenture} alt="Logo Accenture"></Logo>
        <Logo src={Bouygues} alt="Logo Bouygues"></Logo>
        <Logo src={Capital} alt="Logo Capital"></Logo>
        <Logo src={Eductive} alt="Logo Eductive"></Logo>
        <Logo src={Eiffage} alt="Logo Eiffage"></Logo>
        <Logo src={Google} alt="Logo Google"></Logo>
        <Logo src={Ionis} alt="Logo Ionis"></Logo>
        <Logo src={MondialRelay} alt="Logo Mondial Relay" style={{width: "40px"}}></Logo>
        <Logo src={Nike} alt="Logo Nike"></Logo>
        <Logo src={RabotDutilleul} alt="Logo Rabot Dutilleul"></Logo>
        <Logo src={Realites} alt="Logo Réalités"></Logo>
      </Marquee>
    </Main>
  );
};

export default LogosSlider;
