import { Container, FlatList, Link } from "native-base"
import { useCallback } from "react";
import { ListRenderItemInfo } from "react-native/types";
import ExerciseHintEntry from "./FakeExerciseHintModel/FakeExerciseHintEntry";
import { ExerciseHintItem } from "./ExerciseItem";
import { FlatlistContainer } from "./ExerciseItem/Styles";

const FAKE_DATA = [
  new ExerciseHintEntry(1, "titulo1", "descrição1"),
  new ExerciseHintEntry(2, "titulo2", "descrição2")
]

const renderEntry = useCallback(({ item }: ListRenderItemInfo<ExerciseHintEntry>) =>
  <ExerciseHintItem exerciseHintEntry={item} />, [])

const hintKeyExtractor = (_: ExerciseHintEntry, index: number) => index.toString()

const ExercisesHintScreen = () => {
  return (
    <FlatlistContainer>
      <FlatList
        data={FAKE_DATA}
        renderItem={renderEntry}
        keyExtractor={hintKeyExtractor}
      />
    </FlatlistContainer>
  )
}

export default ExercisesHintScreen;
