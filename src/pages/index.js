import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import GlobalStyle from "../global-styles";

import Header from "../components/header";
import SimpleSection from "../components/simple-section";
import CharacterSlider from "../components/characters-slider";
import LogosSlider from "../components/logos-slider";
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
  margin: 5px 0px;
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
      <Header
        textButton="Parlons de votre marque"
        url="https://tally.so/#tally-open=mVLaNl&tally-emoji-text=????&tally-emoji-animation=wave"
      />
      <SimpleSection content="Beaucoup vous explique que pour attirer, convertir et fid??liser vos clients vous devez toujours faire plus. Plus de marketing, plus de neuroscience, plus de visibilit??, plus de notori??t??, plus de publicit??s, ... La v??rit??, c???est que votre capacit?? ?? convaincre votre cible d??pend moins de ce que vous mettez en place que de la mani??re dont vous vous diff??renciez de vos concurrents.">
        La plupart des entreprises ne sont <br />
        <Span>ni vues, ni entendues, ni comprises.</Span>
      </SimpleSection>
      <CharacterSlider />
      <SimpleSection content="Vous pouvez modifier votre promesse, votre gamme de produits ou mettre en avant des valeurs telles que ???l???authenticit????? ou ???la durabilit????? pour conqu??rir le c??ur de vos clients. Le fait est que votre march?? est de plus en plus ??duqu?? et vos concurrents de plus en plus nombreux. Et dans un monde o?? chaque concurrent n???est qu???une nuance de gris du pr??c??dent, seule les entreprises hautes en couleurs tirent leur ??pingle du jeu.">
        La cl?? ? <br />
        <Span>Oser ??tre radicalement diff??rent !</Span>
      </SimpleSection>
      <Transition src={TransitionDown} style={{ marginTop: -10 }} />
      <SimpleSection backgroundColor="white" titleColor="black">
        <Span>Notre solution </Span>
        <br />
        pour sortir la t??te du troupeau
      </SimpleSection>
      <Benefice
        url={GeoCharacter}
        alt="Un personnage gris"
        subtitleText="Une marque unique"
        number="01"
      >
        Pour attirer l???attention, emporter l???adh??sion et activer la m??morisation
        de votre marque dans la t??te de vos prospects et clients, il vous faut
        un ADN de marque efficace, remarquable et sinc??re. Vous allez ??veiller
        les passions, attirer l???attention et cr??er du lien en suscitant d??sir et
        confiance. Utilisez la puissance d???un storytelling impactant et
        inspirant : le votre.
      </Benefice>
      <Benefice
        isReverse="yes"
        textAlign="right"
        url={CrownCharacter}
        alt="Un personnage rouge"
        subtitleText="Un positionnement diff??rentiant"
        number="02"
      >
        Etudions votre concurrence sous toutes les coutures pour vous nicher.
        Avec ce positionnement unique vous allez d??couvrir qui sont les
        personnes qui seront heureuses de se payer votre expertise et capable
        d???en saisir toute la valeur ajout??e. Ce qui s??pare votre client id??al du
        r??sultat pr??cis qu???il veut obtenir, c???est votre offre. L???id??e est de la
        construire en fonction des b??n??fices sp??cifiques et de la destination
        qu???elle lui fera atteindre.
      </Benefice>
      <Benefice
        url={ArmsUpCharacter}
        alt="Un personnage gris"
        subtitleText="Une identit?? remarquable"
        number="03"
      >
        La communication visuelle, c???est le message avant les mots. Le choix des
        couleurs, de la typographie ou des ??l??ments graphiques n???est en rien d??
        au hasard. Les couleurs et les formes sont des codes que re??oit
        inconsciemment votre prospect. Concevoir des messages clairs, puissants
        et polarisants pour attirer, convertir et fid??liser les clients qui sont
        pr??ts ?? se donner les moyens de travailler avec vous.
      </Benefice>
      <Benefice
        isReverse="yes"
        textAlign="right"
        url={HeartCharacter}
        alt="Un personnage rouge"
        subtitleText="Une exp??rience client unique"
        number="04"
      >
        Pour faire vivre des moments d'exception ?? vos prospects et clients vous
        devez d??terminer la nature de la relation que vous souhaitez cr??er.
        Faites d'eux des clients combl??s et des prescripteurs conquis. Chaque
        points de contact avec vos prospects et clients est important. Il faut
        les ??tudier finement et mettre en place un process qui ne laisse rien au
        hasard pour que votre client se sente unique.
      </Benefice>
      <Benefice
        url={TalkCharacter}
        alt="Un personnage gris"
        subtitleText="Une communication magn??tique"
        number="05"
      >
        On vous demande souvent ???vous avez un site ou une plaquette ?? m???envoyer
        ???? Un site et des supports oui, mais qui servent ?? transformer vos
        prospects en clients. Il faut une approche structur??e, par ??tapes pour
        transformer les curieux en clients prescripteurs. Vous pourrez alors
        utiliser les victoires de vos clients et leur amour pour votre marque
        pour que de nouveaux prospects meurent d???envie de travailler avec vous
        et vos ??quipes.
      </Benefice>
      <LogosSlider />
      <SimpleSection
        backgroundColor="white"
        titleColor="black"
        textColor="black"
        content="Pour vous d??marquer sur votre march??, ??tre diff??rent ne suffit plus. Vous devez cr??er une marque radicalement diff??rente. C???est l???outil essentiel pour attirer, convertir et fid??liser de nouveaux clients. C'est pr??cis??ment l?? que nous intervenons. Nous travaillons votre strat??gie de marque en amont pour que toutes vos actions de communication, marketing, vente et RH, soient efficientes et performantes"
      >
        <Span>Pourquoi nous avons </Span>
        <br />
        cr???? Markable
      </SimpleSection>
      <ImageWrapper>
        <Image src={TeamPicture} alt="??quipe de Markable"></Image>
      </ImageWrapper>
      <Transition src={TransitionUp} style={{ marginBottom: -10 }} />
      <SimpleSection>
        <Span>Avec Markable, </Span>
        <br />
        communiquer n'aura jamais ??t?? aussi simple.
      </SimpleSection>
      <Grid>
        <Card>Lancez un nouveau concept et rencontrez votre public</Card>
        <Card>
          Attirer des clients plus qualif??s et les meilleures collaborateurs
        </Card>
        <Card>Gagner vos concours et/ou de nouveaux march??s</Card>
        <Card>Passer de l???id??e au produit minimum viable et lancez-vous</Card>
      </Grid>
      <SimpleSection
        url="https://tally.so/#tally-open=mVLaNl&tally-emoji-text=????&tally-emoji-animation=wave"
        textButton="C'est parti !"
      >
        <Span>Besoin de d??velopper une strat??gie de marque&nbsp;?</Span>
        <br />
        Prenez rendez-vous avec un de nos experts&nbsp;!
      </SimpleSection>
      <Footer>Markable - 2022 ?? Tous droits r??serv??s</Footer>
    </body>
  );
};

export default IndexPage;
