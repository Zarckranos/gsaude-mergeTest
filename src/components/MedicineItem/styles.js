import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  border: 1px solid #E6E6E6;
  border-radius: 10px;
  margin-bottom: 10px;
`
export const Box = styled.View`
  padding:15px;
`
export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`
export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  background-color: rgba(196,196,196,0.21);
  padding:5px;
`
export const Buttons = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items:center;
  margin-right: 15px;
`
export const Text = styled.Text`
  color: #7C7C7C;
`