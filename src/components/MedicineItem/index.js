import React, {useRef} from 'react'
import { Ionicons } from '@expo/vector-icons'
import Badge from '../Badget'
import { useNavigation } from '@react-navigation/native'
import {
  Container,
  Box,
  Title,
  Footer,
  Buttons,
  Text
} from './styles'

function chooseBadge (situation, availableQuantity, date) {
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
  }
}


const MedicineItem = ({ data }) => {
  const { name, availableQuantity, medicineLeaflet, situation, date } = data
  const navigation = useNavigation()

 
  return (
    <Container>
      <Box>
        <Title>{name}</Title>
        {chooseBadge(situation, availableQuantity, date)}
      </Box>
      <Footer>
        <Buttons activeOpacity={0.7} onPress={() => navigation.navigate("PDFView", {medicine:name})}>
         <Ionicons name="document" size={25} color={"#767373"}/>
         <Text>Ler a bula</Text>
        </Buttons>
        <Buttons activeOpacity={0.7} onPress={() => navigation.navigate("ListMedicine", {showModal:true, name:name, availableQuantity:availableQuantity})}>
         <Ionicons name="create" size={30} color={"#767373"}/>
         <Text>Editar</Text>
        </Buttons>
      </Footer>
    </Container>
  )
}

export default MedicineItem