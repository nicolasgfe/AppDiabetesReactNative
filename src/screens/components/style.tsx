import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 1;
  border-color: "black";
  border-width: 2;
  height: 110;
  margin-left: 3%;
  margin-right: 3%;
  background-color: #ade478;
  border-radius:15px;
  border-width: 2px;
  margin: 3%;
  justify-content: center;
`;

export const Items = styled.View`
  flex-direction: row;
`;

export const InfoRigth = styled.View`
  flex-direction: column;
  margin-right: 5%;
  align-items: flex-end;
`;

export const TextMedida = styled.Text`
  font-size: 20;
  margin-left: 5%;
  align-self: center;
`;

export const TextRigth = styled.Text`
  font-size: 16;
`;