import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

import GreyCharacter from "../images/characters-grey.png"
import RedCharacter from "../images/characters-red.png"

const Main = styled.div`
    background-color: #0B0F10;
    padding: 20px 0px;
`
const Character = styled.img`
    height: 100px;
    padding: 0px 50px;
`

const CharacterSlider = () => {
    return(
        <Main>
            <Marquee gradientWidth="0">
                <Character src={GreyCharacter} alt="Un personnage gris"></Character>
                <Character src={GreyCharacter} alt="Un personnage gris"></Character>
                <Character src={GreyCharacter} alt="Un personnage gris"></Character>
                <Character src={GreyCharacter} alt="Un personnage gris"></Character>
                <Character src={RedCharacter} alt="Un personnage rouge"></Character>
                <Character src={GreyCharacter} alt="Un personnage gris"></Character>
                <Character src={GreyCharacter} alt="Un personnage gris"></Character>
                <Character src={GreyCharacter} alt="Un personnage gris"></Character>
                <Character src={GreyCharacter} alt="Un personnage gris"></Character>
                <Character src={GreyCharacter} alt="Un personnage gris"></Character>
                <Character src={GreyCharacter} alt="Un personnage gris"></Character>
                <Character src={GreyCharacter} alt="Un personnage gris"></Character>
                <Character src={GreyCharacter} alt="Un personnage gris"></Character>
                <Character src={GreyCharacter} alt="Un personnage gris"></Character>
            </Marquee>
        </Main>
    );
};

export default CharacterSlider;