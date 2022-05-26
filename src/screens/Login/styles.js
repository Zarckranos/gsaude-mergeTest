import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Overlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(70,66,66,0.80);
  top:0;
  left:0;
  z-index:2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:20px;
`

export const Input = styled.TextInput`
  width: 100%;
  height: 44px;
  background-color: #fff;
  border-radius: 6px;
  padding-left: 18px;
  margin-bottom: 10px;
`

export const Logo = styled.Image`
  width: 200px;
  height: 100px;
`

export const Background = styled.ImageBackground`
  flex:1;
`

export const Text = styled.Text`
  font-size: ${props => props.fs};
  color: #fff;
  font-weight: bold;
`

export const SignupButton = styled.TouchableOpacity`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`