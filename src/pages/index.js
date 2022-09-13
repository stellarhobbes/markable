import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import GlobalStyle from "../global-styles";

import Header from "../components/header";
import SimpleSection from "../components/simple-section";
import CharacterSlider from "../components/characters-slider";
import Benefice from "../components/benefice";
import Grid from "../components/grid";
import Card from "../components/card";

import GeoCharacter from "../images/characters-markable-geo.png";
import CrownCharacter from "../images/characters-markable-crown.png";
import ArmsUpCharacter from "../images/characters-markable-armsup.png";
import HeartCharacter from "../images/characters-markable-heart.png";
import TalkCharacter from "../images/characters-markable-talk.png";
import TransitionDown from "../images/page-transition.png";
import TransitionUp from "../images/page-transition-up.png";
import TeamPicture from "../images/team-markable.png";

const Span = styled.span`
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-style: italic;
`;

const Transition = styled.img`
  width: 100%;
`;

const ImageWrapper = styled.section`
  z-index: -1;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  z-index: -5;
  width: 70%;
  margin-bottom: -30px;
  @media (max-width: 960px) {
    width: 90%;
  }
`;

const Footer = styled.p`
  background-color: #0b0f10;
  color: white;
  padding: 25px 0px;
  margin: 0px;
  text-align: center;
`;

const IndexPage = () => {
  return (
    <body>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Markable</title>
        <link rel="canonical" href="http://www.markable.so" />
        <script async src="https://tally.so/widgets/embed.js"></script>
      </Helmet>
      <Header textButton="Parlons de votre marque" url="https://tally.so/#tally-open=mVLaNl&tally-emoji-text=👋&tally-emoji-animation=wave" />
      <SimpleSection content="Beaucoup vous explique que pour attirer, convertir et fidéliser vos clients vous devez toujours faire plus. Plus de marketing, plus de neuroscience, plus de visibilité, plus de notoriété, plus de techniques, ... La vérité, c’est que votre capacité à convaincre votre cible dépend moins de ce que vous mettez en place que de la manière dont vous vous différenciez de vos concurrents.">
        La plupart des entreprises ne sont <br />
        <Span>ni vues, ni entendues, ni comprises.</Span>
      </SimpleSection>
      <CharacterSlider />
      <SimpleSection content="Vous pouvez modifier votre promesse, votre gamme de produits ou mettre en avant des valeurs telles que “l’authenticité” ou “la durabilité” pour conquérir le cœur de vos clients. Le fait est que votre marché est de plus en plus éduqué et vos concurrents de plus en plus nombreux. Et dans un monde où chaque concurrent n’est qu’une nuance de gris du précédent, seule les entreprises hautes en couleurs tirent leur épingle du jeu.">
        La clé ? <br />
        <Span>Oser être radicalement différent !</Span>
      </SimpleSection>
      <Transition src={TransitionDown} style={{ marginTop: -10 }}/>
      <SimpleSection backgroundColor="white" titleColor="black">
        <Span>Notre solution </Span>
        <br />
        pour sortir la tête du troupeau
      </SimpleSection>
      <Benefice
        url={GeoCharacter}
        alt="Un personnage gris"
        subtitleText="Une identité unique"
        number="01"
      >
        Pour vous démarquer sur votre marché, être différent ne suffit plus.
        Vous devez créer une marque radicalement différente. C’est l’outil
        essentiel pour attirer, convertir et fidéliser de nouveaux clients.
        C'est précisément là que nous intervenons. Nous travaillons votre
        stratégie de marque en amont pour que toutes vos actions de
        communication, marketing, vente et RH, soient efficientes et
        performantes
      </Benefice>
      <Benefice
        isReverse="yes"
        textAlign="right"
        url={CrownCharacter}
        alt="Un personnage rouge"
        subtitleText="Un positionnement différentiant"
        number="02"
      >
        Pour vous démarquer sur votre marché, être différent ne suffit plus.
        Vous devez créer une marque radicalement différente. C’est l’outil
        essentiel pour attirer, convertir et fidéliser de nouveaux clients.
        C'est précisément là que nous intervenons. Nous travaillons votre
        stratégie de marque en amont pour que toutes vos actions de
        communication, marketing, vente et RH, soient efficientes et
        performantes
      </Benefice>
      <Benefice
        url={ArmsUpCharacter}
        alt="Un personnage gris"
        subtitleText="Un look distinctif"
        number="03"
      >
        Pour vous démarquer sur votre marché, être différent ne suffit plus.
        Vous devez créer une marque radicalement différente. C’est l’outil
        essentiel pour attirer, convertir et fidéliser de nouveaux clients.
        C'est précisément là que nous intervenons. Nous travaillons votre
        stratégie de marque en amont pour que toutes vos actions de
        communication, marketing, vente et RH, soient efficientes et
        performantes
      </Benefice>
      <Benefice
        isReverse="yes"
        textAlign="right"
        url={HeartCharacter}
        alt="Un personnage rouge"
        subtitleText="Une expérience unique"
        number="04"
      >
        Pour vous démarquer sur votre marché, être différent ne suffit plus.
        Vous devez créer une marque radicalement différente. C’est l’outil
        essentiel pour attirer, convertir et fidéliser de nouveaux clients.
        C'est précisément là que nous intervenons. Nous travaillons votre
        stratégie de marque en amont pour que toutes vos actions de
        communication, marketing, vente et RH, soient efficientes et
        performantes
      </Benefice>
      <Benefice
        url={TalkCharacter}
        alt="Un personnage gris"
        subtitleText="Une communication magnétique"
        number="05"
      >
        Pour vous démarquer sur votre marché, être différent ne suffit plus.
        Vous devez créer une marque radicalement différente. C’est l’outil
        essentiel pour attirer, convertir et fidéliser de nouveaux clients.
        C'est précisément là que nous intervenons. Nous travaillons votre
        stratégie de marque en amont pour que toutes vos actions de
        communication, marketing, vente et RH, soient efficientes et
        performantes
      </Benefice>
      <SimpleSection
        backgroundColor="white"
        titleColor="black"
        textColor="black"
        content="Pour vous démarquer sur votre marché, être différent ne suffit plus. Vous devez créer une marque radicalement différente. C’est l’outil essentiel pour attirer, convertir et fidéliser de nouveaux clients. C'est précisément là que nous intervenons. Nous travaillons votre stratégie de marque en amont pour que toutes vos actions de communication, marketing, vente et RH, soient efficientes et performantes"
      >
        <Span>Pourquoi nous avons </Span>
        <br />
        créé Markable
      </SimpleSection>
      <ImageWrapper>
        <Image src={TeamPicture} alt="Équipe de Markable"></Image>
      </ImageWrapper>
      <Transition src={TransitionUp} style={{ marginBottom: -10 }} />
      <SimpleSection>
        <Span>Avec Markable, </Span>
        <br />
        communiquer n'aura jamais été aussi simple.
      </SimpleSection>
      <Grid>
        <Card>Lancez un nouveau concept et rencontrez votre public</Card>
        <Card>
          Attirer des clients plus qualifés et les meilleures collaborateurs
        </Card>
        <Card>Gagner vos concours et/ou de nouveaux marchés</Card>
        <Card>Passer de l’idée au produit minimum viable et vous lancer</Card>
      </Grid>
      <SimpleSection url="https://tally.so/#tally-open=mVLaNl&tally-emoji-text=👋&tally-emoji-animation=wave" textButton="C'est parti !">
        <Span>Besoin de développer une stratégie de marque&nbsp;?</Span>
        <br />
        Prenez rendez-vous avec un de nos experts&nbsp;!
      </SimpleSection>
      <Footer>Markable - 2022 © Tous droits réservés</Footer>
    </body>
  );
};

export default IndexPage;
