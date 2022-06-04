import React from 'react'
import DefaultButton from '../../components/DefaultButton'

import {
  Container,
  Body,
  TitleLeft,
  TextLeft,
  InputText
} from './styles'

const Register = () => {
  return (
    <Container>
      <Body>
        <TitleLeft>Estamos quase lá !</TitleLeft>
        <TextLeft>informe seus dados pessoais e crie uma senha para sua conta</TextLeft>
        <InputText
          placeholder="Nome Completo"
          placeholderTextColor={"#BFBCBC"}
          onChangeText={(text) => setEmailState(text)}
        />
        <InputText
          placeholder="CPF"
          placeholderTextColor={"#BFBCBC"}
          onChangeText={(text) => setEmailState(text)}
        />
        <InputText
          placeholder="Data de nascimento"
          placeholderTextColor={"#BFBCBC"}
          onChangeText={(text) => setEmailState(text)}
        />
        <InputText
          placeholder="Senha"
          placeholderTextColor={"#BFBCBC"}
          onChangeText={(text) => setEmailState(text)}
        />
        <DefaultButton name="Concluit" action={handlerSubmit}/>
      </Body>
    </Container>
  )
}

export default Register