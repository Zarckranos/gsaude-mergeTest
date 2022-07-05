import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const Logo = styled.Image`
  width: 170px;
  height: 50px;
  margin: 30px 0px 10px 0px;
`
export const Text = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
`

export const TextStrong = styled(Text)`
  font-weight: bold;
  font-size: 18px;
`
export const TextColor = styled(Text)`
  color: #42B448;
  margin: 0;
`
export const OtpContainer = styled.View`
  margin: 20px 0px 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
export const OtpBox = styled.View`
  border-radius: 30px;
  border-width: 0.5px;
  border-color: #BFBCBC;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin: 0px 5px 0px 5px;
`
export const Input = styled.TextInput`
  font-size: 25px;
  text-align: center;
`
export const TextGray = styled.Text`
  color: #4F4E4E;
`


// signup screen
export const ContainerSignup = styled.View`
  flex: 1;
  align-items: flex-start;
  background-color: #fff;
`
export const Body = styled.View`
  flex: 1;
  background-color: #fff;
  width: 100%;
  padding: 20px;
`
export const TitleStrong = styled.Text`
  font-weight: bold;
  font-size: 30px;
  width: 220px;
  margin: 30px 0px 30px 0px;
`
export const InputText = styled.TextInput`
  width: 100%;
  height: 51px;
  background-color: #F5F0F0;
  border-radius: 6px;
  padding-left: 18px;
  margin-bottom: 10px;
`

// register screen
export const TextLeft = styled(Text)`
  text-align: left;
  margin-bottom: 40px;
  margin-top: 0px;
`
export const TitleLeft = styled(TitleStrong)`
  width:100%;
  margin-bottom: 0px;
`
export const DateButton = styled.TouchableOpacity`
  width: 100%;
  height: 51px;
  background-color: #F5F0F0;
  border-radius: 6px;
  padding-left: 18px;
  margin-bottom: 10px;
  justify-content: center;
`
export const TextDate = styled.Text`
  font-size: 16px;
  color: ${props => props.color};
`
export const Password = styled.View`
  width: 100%;
  height: 51px;
  flex-direction:row;
  background-color: #F5F0F0;
  border-radius: 6px;
  margin-bottom: 10px;
`
export const PassButton = styled.TouchableOpacity`
  margin-right: 50px;
  margin-top: 10px;
  align-items: flex-end;
`
export const InputPassword = styled(InputText)`
  width: 85%;
`