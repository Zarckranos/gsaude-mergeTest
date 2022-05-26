import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const Image = styled.ImageBackground`
  width: 100%;
  height: 240px;
`
export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #AAA4A4;
  margin: 10px 10px;

`
export const Body = styled.View`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: #fff;
  margin-top: -48px;
  flex:1;
  justify-content: center;
  padding:0px 10px 0px 10px;
`
export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  color: #00B954;
  font-weight: bold;
  margin-bottom: 10px;
`
export const Info = styled.View`
  margin-bottom: 20px;
  border-color: #E3DFDF;
  border-top-width: 1px;
`
export const StyleMinimap = styled.View`
  width: ${props => props.width}px;
  margin-left: -10px;
`
export const Item = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-top: 10px;

`
export const Text = styled.Text`
  font-size: 16px;
  text-align: center;
  padding-left: 5px;
`

export const Section = styled.Text`
  font-size: 20px;
  color: #00B954;
  margin-top: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`