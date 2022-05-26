import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Badge from '../Badget'

import {
  Container,
  Box,
  Title,
  Footer,
  Buttons,
  Text
} from './styles'

function chooseBadge (situation, availableQuantity,date){
  switch(situation){
    case "available" :
      return (
        <Badge name={`${availableQuantity} unidades disponíveis`} type="available"/>
      )
    case "missing" :
      return (
        <Badge name="Em falta" type="missing"/>
      )
    case "coming" :
      return (
        <Badge name={`Chega dia ${date}`} type="coming"/>
      )
    default :
      return (
        <Title>as</Title>
      )
  }
}

const MedicineItem = ({ data }) => {
  const { name, availableQuantity, medicineLeaflet, situation, date } = data
  return (
    <Container>
      <Box>
        <Title>{name}</Title>
        {chooseBadge(situation, availableQuantity, date)}
      </Box>
      <Footer>
        <Buttons>
         <Ionicons name="document" size={25} color={"#767373"}/>
         <Text>Ler a bula</Text>
        </Buttons>
        <Buttons>
         <Ionicons name="create" size={30} color={"#767373"}/>
         <Text>Editar</Text>
        </Buttons>
      </Footer>
    </Container>
  )
}

export default MedicineItem