import React from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'
import { Dimensions } from 'react-native'
import Minimap from '../../components/Minimap/index'
import MedicineItem from '../../components/MedicineItem'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Image,
  BackButton,
  Body,
  Title,
  Info,
  StyleMinimap,
  Item,
  Text,
  Section
} from './styles'

const { width } = Dimensions.get('screen')

const HealthCenter = () => {
  const navigation = useNavigation()

  const medicines = [
    {
      name:'Paracetamol',
      availableQuantity:50 , 
      medicineLeaflet: '', 
      situation: "available", 
      date: ''
    },
    {
      name:'Dipirona',
      availableQuantity:0, 
      medicineLeaflet: '', 
      situation: "coming", 
      date: '27/07/2022'
    },
    {
      name:'Ibuprofeno',
      availableQuantity:0 , 
      medicineLeaflet: '', 
      situation: "missing",
      date: ''
    }
  ]

  return (
    <Container>
      <Image 
        source={{uri:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdiariodonordeste.verdesmares.com.br%2Fpolopoly_fs%2F1.1482114!%2Fimage%2Fimage.jpg&f=1&nofb=1'}}
        resizeMode="cover"
      >
        <BackButton onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={30} color={"#fff"} />
        </BackButton>
      </Image>
      <Body>
        <Title>Posto de saúde Dr. Pompeu Vasconcelos</Title>
        <Info>
          <Item>
            <Ionicons name="location-outline" size={25} color={"#00B954"} />
            <Text>Posto de saúde Dr. Pompeu Vasconcelos</Text>
          </Item>
          <Item>
            <Feather name="phone" size={25} color={"#00B954"} />
            <Text>(85) 99999-9999</Text>
          </Item>
          <Item>
            <Feather name="clock" size={25} color={"#00B954"} />
            <Text>Aberto 07:00 - 17:00</Text>
          </Item>
        </Info>
        <StyleMinimap width={width}>
          <Minimap data={{latitude:-3.763863448357797, longitude:-38.5743898087103}}/>
        </StyleMinimap>
        <Section>Lista de remédios</Section>
        {
          medicines.map((element, index) => (
            <MedicineItem key={index} data={element}/>
          ))
        }
      </Body>
    </Container>
  )
}

export default HealthCenter