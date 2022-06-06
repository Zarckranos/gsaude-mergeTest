import React from 'react'
import Header from '../../components/Header'
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
        <HeaderContainer>
            <Header title="Cadastrar novo remédio"/>
            <Container>
                <NewMedicineTextInput 
                    placeholder="Nome do medicamento"
                />
                <Text>Quantidade disponível</Text>
                <Counter/>
                <DefaultButton  name="Salvar"/>
            </Container>
        </HeaderContainer>
    )
}

export default RegisterNewMedicine