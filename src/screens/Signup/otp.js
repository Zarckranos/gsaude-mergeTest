import React, { useRef, useState } from 'react'
import Header from '../../components/Header'
import { useNavigation, useRoute } from '@react-navigation/core'
import Toast from 'react-native-toast-message'

import {
  Container,
  Logo,
  TextStrong,
  Text,
  TextColor,
  OtpContainer,
  OtpBox,
  Input,
  TextGray,

} from './styles'

const Otp = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Reenviamos um código para você!',
      text2: 'Não se esqueça de olhar no spam tambem !'
    });
  }

  return (
    <Container>
      <Header title=""/>
      <Logo source={require("./../../assets/logo.png")} resizeMode="contain"/>
      <TextStrong>Código de verificação</TextStrong>
      <Text>Enviamos um código de verificação para</Text>
      <TextColor>{route.params?.email}</TextColor>
      <OtpContainer>
        <OtpBox>
          <Input 
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChangeText = { text => {
              setOtp({...otp, 1: text});
              text && secondInput.current.focus()
            }}
          />
        </OtpBox>
        <OtpBox>
          <Input 
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChangeText = { text => {
              setOtp({...otp, 2: text});
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
          />
        </OtpBox>
        <OtpBox>
          <Input 
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText = { text => {
              setOtp({...otp, 3: text});
              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
          />
        </OtpBox>
        <OtpBox>
          <Input 
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChangeText = { text => {
              setOtp({...otp, 4: text});
              !text && thirdInput.current.focus();
              console.log({...otp, 4: text})
              navigation.navigate("Register")
            }}
          />
        </OtpBox>
      </OtpContainer>
      <TextGray onPress={showToast}>Deseja reenviar o código ?</TextGray>
    </Container>
  )
}

export default Otp