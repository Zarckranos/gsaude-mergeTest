import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
`

const styles = StyleSheet.create({
  list__container:{
      margin: 10,
      height: "85%",
      width: "100%"
  }, 
});

export default styles;