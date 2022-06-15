import React from 'react'
import { Modalize } from 'react-native-modalize'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation} from '@react-navigation/native';
import DefaultButton from '../../DefaultButton';
import {
  Title,
  Container,
  Text,
  TextSection,
  Item,
  MapButton
} from './styles'

const UpdateMedicineModal = ({ modalizeRef,  name, availableQuantity}) => {
  const navigation = useNavigation()
 
  return (
    <Modalize ref={modalizeRef} snapPoint={350} handlePosition={'inside'}>
        <Container>
            <Title>{name}</Title>
            <Text>Quantas unidades chegaram?</Text>
            <DefaultButton name="Salvar"/>
        </Container>
      
    </Modalize>
  )
} 

export default UpdateMedicineModal