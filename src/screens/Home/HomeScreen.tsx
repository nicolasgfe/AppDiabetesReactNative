import React from "react"
import { Container, Title, Label, MainBox, LinksContainer, HintsBox } from "./Style";
import { Link, Text, Spacer } from "native-base";
import { ExercisesHintScreen } from "../HintScreenExercises";
import { NutritionHintScreen } from "../HintScreenNutrition";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorProps } from "../../navigation";

const HomeScreen = () => {
  const navigation = useNavigation<AppNavigatorProps>();

  const openHistoryScreen = () => {
    navigation.navigate('History');
  };

  const openGlucosaScreen = () => {
    navigation.navigate('Glucose');
  };

  const openExerciseHintScreen = () => {
    navigation.navigate('Exercise_tips');
  };

  const openNutritionHintScreen = () => {
    navigation.navigate('Nutrition_tips');
  };



  return(
    <>
    <Text> GLICEMIA - ÚLTIMA MEDIÇÃO </Text>
    <Container>
      <Title> GLICEMIA - ÚLTIMA MEDIÇÃO </Title>

      <MainBox>
      
      </MainBox>

      <LinksContainer>
        <Link onPress={openGlucosaScreen}>O que é glicemia?</Link>
        <Spacer />
        <Link onPress={openHistoryScreen}>Meu histórico de medições</Link>
      </LinksContainer>

      <Label>Dicas de exercícios:</Label>
      <HintsBox>
        <ExercisesHintScreen />
      </HintsBox>

      <LinksContainer>
        <Spacer />
        <Link onPress={openExerciseHintScreen}>Ver mais dicas</Link>
      </LinksContainer>
      

      <Label>Dicas de nutrição:</Label>
      <HintsBox>
        <NutritionHintScreen />
      </HintsBox>
    </Container>
    </>
  )
}

export default HomeScreen;