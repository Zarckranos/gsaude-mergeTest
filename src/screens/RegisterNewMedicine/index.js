import React from 'react'
import Header from '../../components/Header'
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import {
  Container,
  Text,
  NewMedicineTextInput,
  HeaderContainer
} from './styles'

import Counter from '../../components/Counter'
import DefaultButton from '../../components/DefaultButton'
const RegisterNewMedicine = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <HeaderContainer>
                <Header title="Cadastrar novo remédio"/>
                <Container>
                    <NewMedicineTextInput 
                        placeholder="Nome do medicamento"
                        placeholderTextColor="#BFBCBC"
                    />
                    <Text>Quantidade disponível</Text>
                    <Counter/>
                    <DefaultButton  name="Salvar"/>
                </Container>
            </HeaderContainer>
        </TouchableWithoutFeedback>
    )
}

export default RegisterNewMedicine