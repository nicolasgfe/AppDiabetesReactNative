import { Container, Text } from "native-base"
import { memo } from "react"
import { HintItemProps } from "./interface"

const HintItem = ({ hintEntry }: HintItemProps) => {
    return (
        <Container>
            <Text>{hintEntry.Title}</Text>
            <Text>{hintEntry.Description}</Text>
        </Container>
    )
}

export default memo(HintItem)
