import { Container, FlatList } from "native-base"
import { useCallback } from "react";
import { ListRenderItemInfo } from "react-native/types";
import ExerciseHintEntry from "./FakeExerciseHintModel/FakeExerciseHintEntry";
import { ExerciseHintItem } from "./ExerciseItem";

const FAKE_DATA = [
    new ExerciseHintEntry(1, "titulo1", "descrição1"),
    new ExerciseHintEntry(2, "titulo2", "descrição2")
]

const renderEntry = useCallback(({ item }: ListRenderItemInfo<ExerciseHintEntry>) =>
    <ExerciseHintItem exerciseHintEntry={item} />, [])

const hintKeyExtractor = (_: ExerciseHintEntry, index: number) => index.toString()

const ExercisesHintScreen = () => {
    return (
        <Container>
            <FlatList
                data={FAKE_DATA}
                renderItem={({ item }) => <ExerciseHintItem exerciseHintEntry={item} />}
                keyExtractor={hintKeyExtractor}
            />
        </Container>
    )
}

export default ExercisesHintScreen;
