import { Divider, HStack, Row, Spacer, Text, View } from "native-base"
import { ItemProps } from "./interface";
import styled from "styled-components/native";

const Container = styled.View`
  /* border-radius: 1;
  border-color: "black";
  border-width: 2;
  height: 80;
  margin-left: 3%;
  margin-right: 3%; */
  `;

const Teste = styled.View`
  flex-direction: row;
  background-color: red;
  width: 100%

`;


const Item = ({ medida, date }: ItemProps) => (
  // <Container 
  // style={{marginLeft: "3%", marginRight: "3%", flex: 1}}
  // >
    <Teste >
      <Text 
      style={{backgroundColor: "red"}}
      >{medida}</Text>
      <Spacer />
      <Text>{date}</Text>
    </Teste>
    // <Divider/>  
  // </Container>
);

export {
  Item
}