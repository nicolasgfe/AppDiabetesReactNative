import React from "react"
import { Container, Title, Label, MainBox, TipsBox, LinksContainer } from "./Style";
import { Link, Spacer } from "native-base";
import { Fonts } from "../../assets/fonts/GoogleFonts";

const HomeScreen = () => {
  return(
    <Container>
      <Fonts>
      <Title> GLICEMIA - ÚLTIMA MEDIÇÃO </Title>
      </Fonts>
      <MainBox>
      
      </MainBox>

      <LinksContainer>
        <Link>O que é glicemia?</Link>
        <Spacer />
        <Link>Meu histórico de medições</Link>
      </LinksContainer>

      <Label>   Dicas de exercícios:</Label>
      <TipsBox></TipsBox>

      <Label>Dicas de nutrição:</Label>
      <TipsBox></TipsBox>
    </Container>
  )
}

export default HomeScreen;