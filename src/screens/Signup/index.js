import React, { useState } from 'react'
import DefaultButton from '../../components/DefaultButton'
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

import {
  ContainerSignup,
  Body,
  TitleStrong,
  InputText
} from './styles'

const Signup = () => {
  const navigation = useNavigation()
  const [emailState, setEmailState] = useState('')

  const handlerSubmit = () => {
    if(emailState.trim() != '' && emailState.includes('@')) {
      navigation.navigate('Otp', { email: emailState })
    }else {
      Toast.show({
        type: 'error',
        text1: 'Temos um problema!',
        text2: 'Você precisa inserir um email válido'
      });
    }
  }

  return (
    <ContainerSignup>
      <Header title="Crie uma conta"/>
      <Body>
        <TitleStrong>Bem-vindo, insira seu email</TitleStrong>
        <InputText
          placeholder="Email"
          placeholderTextColor={"#BFBCBC"}
          onChangeText={(text) => setEmailState(text)}
        />
        <DefaultButton name="avançar" action={handlerSubmit}/>
      </Body>
      
    </ContainerSignup>
  )
}

export default Signup