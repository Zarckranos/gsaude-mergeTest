import styled from "styled-components/native";
import { KeyboardAvoidingView } from "react-native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  background-color: white;
`;

export const Header = styled.View`
  margin-top: 50px;
  margin-horizontal: 25px;
  padding-right: 20px;
  padding-left: 10px;
  padding-vertical: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #EBE5E5;
`

export const EmptySearchText = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-top: 5px;
  margin-left: 0px;
  color: #9C9C9C;
`

export const ResultsText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
  margin-left: 25px;
  color: #42B448;
`

export const ListContainer = styled.View` 
  margin: 10px;
  height: 85%;
  width: 100%;
  align-self: center;
`
export const EmptySearch = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 100px;
`

export const BackButton = styled.TouchableOpacity`
    z-index: 1;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`