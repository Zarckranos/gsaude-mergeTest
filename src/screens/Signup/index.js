import React, { useState } from 'react'
import DefaultButton from '../../components/DefaultButton'
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import api from '../../services/api'

import {
  ContainerSignup,
  Body,
  TitleStrong,
  InputText
} from './styles'

const Signup = () => {
  const navigation = useNavigation()
  const [emailState, setEmailState] = useState('')

  const handlerSubmit = async() => {
    if(emailState.trim() != '' && emailState.includes('@')) {
      try {
        const res = await api.post('/user/sendCode',{ email: emailState })
        if(res.data.type == 'success') {
          navigation.navigate('Otp', { email: emailState })
        }else if (res.data.type == 'emailExist') {
          Toast.show({
            type: 'error',
            text1: 'Temos um problema!',
            text2: 'Email já cadastrado'
          });
        }
      }catch(err) {
        Toast.show({
          type: 'error',
          text1: 'Temos um problema!',
          text2: 'Algo de errado aconteceu, tente novamente mais tarde'
        });
      }
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