import React from 'react'
import { Modalize } from 'react-native-modalize'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation} from '@react-navigation/native';

import {
  Title,
  Text,
  Box,
  TextSection,
  Item,
  MapButton
} from './styles'

const NotificationsModal = ({ modalizeRef }) => {
  const navigation = useNavigation()

  const data = [
    {
      medicine: 'Paracetamol',
      healthCenter : [
        {
          name: 'Posto de Saúde Gothardo Peixoto Figueiredo Lima',
          latitude:-3.7607844941033206, 
          longitude:-38.55566017428429,
        },
        {
          name: 'UBS MARIA LIDIA DE MOURA 2',
          latitude:-3.7707999514632116, 
          longitude:-38.57070050497226,
        }
      ]

    },
    {
      medicine: 'Ibuprofeno',
      healthCenter : [
        {
          name: 'Posto de Saúde Ivana de Souza Paes',
          latitude:-3.7248909108913524, 
          longitude:-38.56952331661982,
        },
        {
          name: 'Posto de Saúde Waldemar de Alcantara',
          latitude:-3.7737527671893, 
          longitude:-38.577863924289005,
        }
      ]

    }
  ]

  return (
    <Modalize ref={modalizeRef} snapPoint={350} handlePosition={'inside'}>
      <Title>Notificações</Title>
      {data.map((element, index) => (
        <Box key={index}>
          <TextSection>{element.medicine} disponível em:</TextSection>
          {element.healthCenter.map((healthCenter,index) => (
            <Item key={index}>
              <Text>{healthCenter.name}</Text>
              <MapButton 
                activeOpacity={0.7} 
                onPress={() => navigation.navigate('Fullmap',{latitude:healthCenter.latitude, longitude:healthCenter.longitude})}>
                <Ionicons name="location-sharp" size={30} color="#FF0000" />
              </MapButton>
            </Item>
          ))}
        </Box>
      ))}
    </Modalize>
  )
} 

export default NotificationsModal