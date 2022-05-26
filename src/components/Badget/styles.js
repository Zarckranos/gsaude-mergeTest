import styled from "styled-components/native";

export const Container = styled.View`
  width: ${props => props.width};
  background-color: ${props => props.backgroundColor};
  border: 1px solid;
  border-color: ${props => props.borderColor};
  padding: 3px;
  margin-top: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.color};
  text-align: center;
`