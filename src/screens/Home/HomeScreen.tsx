import React from "react"
import { Container, Title, Label, MainBox, TipsBox, LinksContainer } from "./Style";
import { Link,Text,  Spacer } from "native-base";
import ExercisesHintScreen from "../HintScreenExercises/ExerciseHintScreen";
import NutritionHintScreen from "../HintScreen/NutritionHintScreen";
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
      <TipsBox>
        <ExercisesHintScreen />
      </TipsBox>

      <Label>Dicas de nutrição:</Label>
      <TipsBox>
        <NutritionHintScreen />
      </TipsBox>
    </Container>
    </>
  )
}

export default HomeScreen;