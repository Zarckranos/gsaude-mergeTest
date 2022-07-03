import React, { useRef, useState } from 'react'
import Header from '../../components/Header'
import { useNavigation, useRoute } from '@react-navigation/core'
import Toast from 'react-native-toast-message'
import api from '../../services/api'

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

  const showToast = async() => {
    try {
      await api.post('/user/sendCode',{ email: route.params?.email })
      Toast.show({
        type: 'success',
        text1: 'Reenviamos um código para você!',
        text2: 'Não se esqueça de olhar no spam tambem !'
      });
      setOtp({1: '', 2: '', 3: '', 4: ''})
    } catch(err) {
      Toast.show({
        type: 'error',
        text1: 'Temos um problema!',
        text2: 'Algo de errado aconteceu, tente novamente mais tarde'
      });
    }
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
            defaultValue={otp[1]}
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
            defaultValue={otp[2]}
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
            defaultValue={otp[3]}
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
            defaultValue={otp[4]}
            onChangeText = { async (text) => {
              setOtp({...otp, 4: text});
              !text && thirdInput.current.focus();
              let otpNumber = Number(`${otp[1]}${otp[2]}${otp[3]}${text}`) 
              try {
                const resp = await api.get(`/user/validateVerificationCode/${otpNumber}`)
                if(resp.data.type == 'success') {
                  navigation.navigate("Register", { email: route.params?.email})
                } else {
                  Toast.show({
                    type: 'error',
                    text1: 'Temos um problema!',
                    text2: 'Codigo atual inspirado ou inválido'
                  });
                }

              }catch(err) {
                Toast.show({
                  type: 'error',
                  text1: 'Temos um problema!',
                  text2: 'Algo de errado aconteceu, tente novamente mais tarde'
                });
              }
            }}
          />
        </OtpBox>
      </OtpContainer>
      <TextGray onPress={showToast}>Deseja reenviar o código ?</TextGray>
    </Container>
  )
}

export default Otp