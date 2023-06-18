import { Container, FlatList } from "native-base"
import HintEntry from "./FakeModel/FakeHintEntry"
import HintItem from "./item/HintItem"
import { useCallback } from "react";
import { ListRenderItemInfo } from "react-native/types";

const FAKE_DATA = [
    new HintEntry(1, "titulo1", "descrição1"),
    new HintEntry(2, "titulo2", "descrição2")
]

const renderEntry = useCallback(({ item }: ListRenderItemInfo<HintEntry>) => 
<HintItem hintEntry={item} />, [])

const hintKeyExtractor = (_: HintEntry, index: number) => index.toString()

const HintScreen = () => {
    return (
        <Container>
            <FlatList 
                data={FAKE_DATA}
                renderItem={({item}) => <HintItem hintEntry={item} />}
                keyExtractor={hintKeyExtractor}
            />
        </Container>
    )
}

export default HintScreen;
