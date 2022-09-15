import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import GlobalStyle from "../global-styles"

import Button from "../components/button"

const Body = styled.body`
  margin: 0px;
`
const Main = styled.section`
 color: white;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
margin: 0px;
`
const Subtitle = styled.p`
margin: 0px;
font-family: "Playfair Display", serif;
  font-weight: 400;
  font-style: italic;
`

const NotFoundPage = () => {
  return (
    <Body style={{backgroundColor: "#0b0f10"}}>
      <GlobalStyle/>
      <Main>
        <Title>Maaaaaaaaaaaaaaaark !</Title>
        <Subtitle>( je t'aime )</Subtitle>
        <div style={{marginBottom: "50px"}}></div>
        <Link to="/"><Button textButton="Retour à l'accueil"></Button></Link>
      </Main>
    </Body>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
