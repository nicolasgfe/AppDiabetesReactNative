import { Divider, HStack, Row, Spacer, Text, View } from "native-base"
import { ItemProps } from "./interface";
import { Container, InfoRigth, Items, TextMedida, TextRigth } from "./style";

const Item = ({ medida, date }: ItemProps) => (
  <Container >
    <Items>
      <TextMedida >{medida} mg/dl</TextMedida>
      <Spacer />
      <InfoRigth>
        <TextRigth>situação</TextRigth>
        <TextRigth>{date}</TextRigth>
      </InfoRigth>
    </Items>
  </Container>
);

export {
  Item
}