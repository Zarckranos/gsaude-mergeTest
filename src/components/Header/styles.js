import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 60px;
  padding: 5px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;
`

export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-self: center;
  width: 35px;
`
export const Title = styled.Text`
  font-size: 20px;
  color: #000;
`