import { Text } from "native-base"
import { memo } from "react"
import { ExerciseHintItemProps } from "./interface"
import { HintContainer } from "./Styles"

const ExerciseHintItem = ({ exerciseHintEntry }: ExerciseHintItemProps) => {
    return (
        <HintContainer>
            <Text>{exerciseHintEntry.Title}</Text>
            <Text>{exerciseHintEntry.Description}</Text>
        </HintContainer>
    )
}

export default memo(ExerciseHintItem);
