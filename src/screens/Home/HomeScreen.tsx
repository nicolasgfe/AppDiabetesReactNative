import React from "react"
import { Container, Title, Label, MainBox, LinksContainer, HintsBox } from "./Style";
import { Link, Text, Spacer } from "native-base";
import { ExercisesHintScreen } from "../HintScreenExercises";
import { NutritionHintScreen } from "../HintScreenNutrition";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorProps } from "../../navigation";

const HomeScreen = () => {

  const navigator = useNavigation<AppNavigatorProps>()

  const openExerciseHintScreen = () => {
    navigator.navigate("ExerciseHints")
  }

  const openNutritionHintScreen = () => {
    navigator.navigate("NutritionHints")
  }

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
        <Link>Meu histórico de medições</Link>
      </LinksContainer>

      <Label>Dicas de exercícios:</Label>
      <HintsBox>
        <ExercisesHintScreen />
      </HintsBox>
      <Container>
        <Link onPress={openExerciseHintScreen}>
          Veja mais dicas
        </Link>
      </Container>

      <Label>Dicas de nutrição:</Label>
      <HintsBox>
        <NutritionHintScreen />
      </HintsBox>
      <Container>
        <Link onPress={openNutritionHintScreen}>
          Veja mais dicas
        </Link>
      </Container>
    </Container>
    </>
  )
}

export default HomeScreen;