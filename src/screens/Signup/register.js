import React, { useState } from 'react'
import DefaultButton from '../../components/DefaultButton'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/core'
import Toast from 'react-native-toast-message'

import {
  Container,
  Body,
  TitleLeft,
  TextLeft,
  InputText,
  DateButton,
  TextDate,
  Password,
  PassButton,
  InputPassword
} from './styles'

const Register = () => {
  const navigation = useNavigation()
  const [fullname, setFullName] = useState('')
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [date, setDate] = useState(new Date())
  const [text, setText] = useState('data de nascimento')
  const [showPassword, setShowPassword] = useState(false)

  const getDate = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShowDatePicker(Platform.OS === 'ios')
    setDate(currentDate)

    let tempDate = new Date(currentDate)
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
    setText(fDate)
  }

  const handlerSubmit = () => {
    if(fullname.trim() != '' && cpf.trim() != '' && password.trim() != '' && text != 'data de nascimento') {
      navigation.navigate("Home")
    }else {
      Toast.show({
        type: 'error',
        text1: 'Temos um problema!',
        text2: 'Você precisa preencher todos os campos'
      });
    }
  }

  return (
    <>
      <Container>
        <Body>
          <TitleLeft>Estamos quase lá !</TitleLeft>
          <TextLeft>informe seus dados pessoais e crie uma senha para sua conta</TextLeft>
          <InputText
            placeholder="Nome Completo"
            placeholderTextColor={"#BFBCBC"}
            onChangeText={(text) => setFullName(text)}
          />
          <InputText
            placeholder="CPF"
            maxLength={11}
            keyboardType="number-pad"
            placeholderTextColor={"#BFBCBC"}
            onChangeText={(text) => setCpf(text)}
          />
          <DateButton activeOpacity={0.7} onPress={() => setShowDatePicker(true)}>
            <TextDate color={text != "data de nascimento" ? "#000" : "#BFBCBC"}>{text}</TextDate>
          </DateButton>
          <Password>
            <InputPassword
              secureTextEntry={!showPassword}
              placeholder="Senha"
              placeholderTextColor={"#BFBCBC"}
              onChangeText={(text) => setPassword(text)}
            />
            <PassButton onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Ionicons name="eye" size={30} color="#BFBCBC"/>
              ): (
                <Ionicons name="eye-off" size={30} color="#BFBCBC"/>
              )}
            </PassButton>
          </Password>
          <DefaultButton name="Concluir" action={handlerSubmit}/>
        </Body>
      </Container>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          mode={'date'}
          display='default'
          value={date}
          onChange={getDate}
        />
      )}

    </>
  )
}

export default Register