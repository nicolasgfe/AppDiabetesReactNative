import React from "react"
import { Container, Title, Label, MainBox, TipsBox, LinksContainer } from "./Style";
import { Link,Text,  Spacer } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorProps } from "../../navigation";

const HomeScreen = () => {
  const navigation = useNavigation<AppNavigatorProps>();

  const openHistoryScreen = () => {
    navigation.navigate('HistoryScreen');
  };


  return(
    <>
    <Text> GLICEMIA - ÚLTIMA MEDIÇÃO </Text>
    <Container>
      <Title> GLICEMIA - ÚLTIMA MEDIÇÃO </Title>

      <MainBox>
      
      </MainBox>

      <LinksContainer>
        <Link>O que é glicemia?</Link>
        <Spacer />
        <Link onPress={openHistoryScreen}>Meu histórico de medições</Link>
      </LinksContainer>

      <Label>   Dicas de exercícios:</Label>
      <TipsBox></TipsBox>

      <Label>Dicas de nutrição:</Label>
      <TipsBox></TipsBox>
    </Container>
    </>
  )
}

export default HomeScreen;