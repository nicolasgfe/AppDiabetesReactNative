import { Container, FlatList, Link } from "native-base"
import { useCallback } from "react";
import { ListRenderItemInfo } from "react-native/types";
import NutritionHintEntry from "./FakeNutritionHintModel/FakeNutritionHintEntry";
import { NutritionHintItem } from "./NutritionItem";
import { FlatlistContainer } from "./NutritionItem/Styles";

const FAKE_DATA = [
  new NutritionHintEntry(1, "titulo1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
  new NutritionHintEntry(2, "titulo2", "descrição2")
]

const renderEntry = useCallback(({ item }: ListRenderItemInfo<NutritionHintEntry>) =>
  <NutritionHintItem nutritionHintEntry={item} />, [])

const hintKeyExtractor = (_: NutritionHintEntry, index: number) => index.toString()

const NutritionHintScreen = () => {
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

export default NutritionHintScreen;
