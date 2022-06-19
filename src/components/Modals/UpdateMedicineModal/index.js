import React from 'react'
import { Modalize } from 'react-native-modalize'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation} from '@react-navigation/native';
import DefaultButton from '../../DefaultButton';
import CounterCopy from '../../CounterCopy';
import {
  Title,
  Container,
  Text,
  KeyboardAvoidingView,
  TextSection,
  Item,
  MapButton
} from './styles'

const UpdateMedicineModal = ({ modalizeRef,  name, availableQuantity}) => {
  const navigation = useNavigation()
 
  return (
        <Modalize ref={modalizeRef} snapPoint={350} handlePosition={'inside'} keyboardAvoidingBehavior={'height'} modalStyle={{borderTopLeftRadius:25, borderTopRightRadius:25}}>
            <Container>
                <Title>{name}</Title>
                <Text>Quantas unidades chegaram?</Text>
                <CounterCopy availableQuantity={availableQuantity}/>
                <DefaultButton name="Salvar"/>
            </Container>
        </Modalize>
    
  )
} 

export default UpdateMedicineModal