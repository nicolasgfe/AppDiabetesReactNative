import { Text } from "native-base"
import { memo } from "react"
import { NutritionHintItemProps } from "./interface"
import { HintContainer } from "./Styles"

const NutritionHintItem = ({ nutritionHintEntry }: NutritionHintItemProps) => {
    return (
        <HintContainer>
            <Text>{nutritionHintEntry.Title}</Text>
            <Text>{nutritionHintEntry.Description}</Text>
        </HintContainer>
    )
}

export default memo(NutritionHintItem);
