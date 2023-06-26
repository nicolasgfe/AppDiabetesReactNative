import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`
export const MainBox = styled.View`
    width: 95%;
    height: 150px;
    background-color: rgb(255, 255, 255);
    border-radius:10px;
    border-width: 2px;
    border-color: rgb(176, 176, 176);
`
export const LinksContainer = styled.View`
  flex-direction: row;
  margin-left: 10px;
  margin-right: 10px;
`

export const HintsBox = styled.View`
    margin-top: 5px;
    width: 95%;
    height: 150px;
    border-radius:10px;
    background-color: rgb(255, 255, 255);
    border-width: 2px;
    border-color: rgb(176, 176, 176);
`

export const Title = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #000000;
  font-family: fantasy;
`

export const Label = styled.Text`
  margin-top: 25px;
  margin-right: 220px;
  color: #000000;
  font-family: sans-serif;
`
