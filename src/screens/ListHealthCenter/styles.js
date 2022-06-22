import styled from "styled-components/native";
import { KeyboardAvoidingView } from "react-native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  background-color: white;
`;

export const Header = styled.View`
  top: 0;
  padding-left: 15px;
  padding-right: 30px;
  padding-vertical: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #EBE5E5;
  height: 60px;
  width: 90%;
  left:25px;
  right: 20px;
  position: absolute;
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
  padding-top: 5px;
  text-align: left;
  margin-horizontal: 25px;
  margin-top: 60px;
  height: 35px;
  color: #42B448;
  margin-bottom:0px;
`

export const ListContainer = styled.View` 
  margin-horizontal: 10px;
  height: 80%;
  width: 100%;
  align-self: center;
  flex: 1;
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
    margin-right: 10px;
`